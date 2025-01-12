import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { RiDeleteBin6Line } from 'react-icons/ri'
import useCreateDate from '../components/useCreateDate'

const EditNote = ({ notes, setNotes }) => {
  console.log("notes load");
  const { id } = useParams()
  const note = notes.find(item => item.id === id) || {}

  const [title, setTitle] = useState(note.title)
  const [details, setDetails] = useState(note.details)

  const date = useCreateDate()
  const navigate = useNavigate()

  const handleUpdate = (e) => {
    console.log("Update");
    e.preventDefault()
    if(title && details) {
      const newNote = {...note, title: title, details: details, date: date}
      let newNotes = notes.map(item => item.id === id ? newNote : item);
      setNotes(newNotes)
    }
    // redirect to notes page
    navigate('/')
  }

  const handleDelete = () => {
    if(window.confirm('Are you sure ?')) {
      console.log("delete");
      // const newNotes = notes.filter(item => item.id !== id)
      // console.log('Shrinath: ', newNotes);
      // setNotes(newNotes)
      setNotes(prevNotes => prevNotes.filter(item => item.id !== id))
      navigate('/')
    }
    
  }

  return (
    <section>
      <header className='create-note__header'>
        <Link to='/' className='btn'><IoIosArrowBack /></Link>
        <button className="btn lg primary" onClick={handleUpdate}>Save</button>
        <button className="btn danger" onClick={handleDelete}><RiDeleteBin6Line /></button>
      </header>
      <form action="" className="create-note__form" onSubmit={handleUpdate}>
        <input type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} autoFocus />
        <textarea cols="3" rows="28" placeholder='Note Details...' value={details} onChange={(e)=>{setDetails(e.target.value)}}></textarea>
      </form>
    </section>
  )
}

export default EditNote