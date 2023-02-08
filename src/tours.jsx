import React from 'react'
import Cmnt from './cmnt';
import Tour from './tour';
import "./tourimages.css"


const Tours = ({ tours, comments }) => {
    return (
        <>
            <div className='tours'>
                {
                    tours.map((mytours) => {

                        return <Tour tour={mytours} key={mytours.id} />
                    })
                }
            </div>
            <div className="maincomments">
                <Cmnt />
            </div>
        </>
    )
}

export default Tours;