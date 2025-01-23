import { useState } from 'react'
import './Stars.css'

const DEFAULT_COUNT = 5;
const DEFAULT_ICON = "★";
const DEFAULT_UNSELECTED_COLOR = "grey"
const DEFAULT_COLOR = "yellow"

const Stars = ({ count, defaultRating, icon, color, iconSize }) => {
    const [rating, setRating] = useState(defaultRating)
    const [hoverRating, setHoverRating] = useState(0)

    let stars = Array(count || DEFAULT_COUNT).fill(icon || DEFAULT_ICON);

    const handleClick = (rating) => {
        setRating(rating)
        // storing to local
        // localStorage.setItem("starRating", rating);

    }

    return (
        <div className='starsContainer'>
            {stars.map((item, index) => {
                // check if current star should be colored
                // if current index is less then rating then colored
                
                // prefer rating, doesnt recolor hoverRating
                // const isActiveColor = (hoverRating || rating )
                //     && (index < hoverRating || index < rating )
                
                // Eric Murphy
                // prefer hoverrating color and removerating
                const isActiveColor = (hoverRating || rating )
                    && (index < (hoverRating || rating) )

                let elementColor = "";

                if (isActiveColor) {
                    elementColor = color || DEFAULT_COLOR;
                } else {
                    elementColor = DEFAULT_UNSELECTED_COLOR
                }


                return (<div className='star' key={index}
                    style={{
                        fontSize: iconSize ? `${iconSize}px` : '14px',
                        // for text based icons
                        color: elementColor,
                        // for emoji icons add grayscale
                        filter: `${isActiveColor ? "grayscale(0%)" : "grayscale(100%)"}`
                    }}
                    onClick={()=> handleClick(index + 1)}
                    onMouseOver={() => setHoverRating(index + 1)}
                    onMouseLeave={() => setHoverRating(0)}
                    >
                    {icon ? icon : DEFAULT_ICON}</div>)

            })

            }
        </div>
    )
}

export default Stars
