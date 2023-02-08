import React, { useState } from 'react'
import "./tourimages.css"

const Tour = ({ tour }) => {
    const [readmore, setreadmore] = useState(true)
    return (

        <div className='tourImages' >
            <img src={tour.image} alt="" />
            <div className="detail">

                <h3>{tour.name}</h3>
                <h4 style={{ marginTop: ".5rem" }}> Rs {tour.price} / day</h4>

                <p>{readmore ? tour.info.substring(0, 250) : tour.info}
                    <button onClick={() => setreadmore(!readmore)}>
                        {readmore ? "Read more" : "Show less"}
                    </button>
                </p>
            </div>


        </div >

    )
}

export default Tour