import React from 'react'
import loader from "./images/spinner.gif"
import "./loader.css"
const LoaderComponent = () => {
    return (
        <div className="main">

            <div className='loader'>

                <img src={loader} alt="spin " />
            </div>
        </div>
    )
}

export default LoaderComponent