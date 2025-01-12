import { CiSearch } from 'react-icons/ci'
import { MdClose } from 'react-icons/md'
import { BsPlusLg } from 'react-icons/bs'

import { Link } from 'react-router-dom'
import NoteItem from '../components/NoteItem'
import { useEffect, useState } from 'react'

const Notes = ({ notes }) => {
    const [showSearch, setShowSearch] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [filteredNotes, setFilteredNotes] = useState(notes)

    const handleSearch = () => {
        const matchingNotes = notes.filter(note => note.title.toLowerCase().includes(searchText.toLowerCase()))
        setFilteredNotes(matchingNotes)
    }

    // useEffect(handleSearch, [searchText])
    // Error, hence adding notes as dependency
    // React Hook useEffect has a missing dependency: 'notes'. Either include it or remove the dependency array
    useEffect(handleSearch, [searchText, notes])
    // https://overreacted.io/a-complete-guide-to-useeffect/#moving-functions-inside-effects

    return (
        <section>
            <header className='notes__header'>
                {!showSearch && <h2>My Notes</h2>}
                {/* We have to show one either input or button */}
                {showSearch && <input type='text' autoFocus placeholder='Keyword...' value={searchText} onChange={(e) => setSearchText(e.target.value)} />}
                <button className='btn' onClick={() => setShowSearch(prevState => !prevState)}>{showSearch ? <MdClose /> : <CiSearch />}</button>

            </header>
            <div className="notes__container">
                {filteredNotes.length === 0 && <p>No notes found.</p>}
                {
                    filteredNotes.map(note => <NoteItem key={note.id} note={note} />)
                }
            </div>
            <Link to='/create-note' className='btn add__btn'><BsPlusLg /></Link>
        </section>
    )
}

export default Notes