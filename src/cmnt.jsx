import React, { useState } from 'react'
import "./comment.css"

const Cmnt = () => {
    const [email, setemail] = useState("")
    const [message, setmessage] = useState("")
    const [detail, setdetail] = useState([])
    const submitHandler = (e) => {
        e.preventDefault();
        if (!message) {
            alert("Please write something")
        }
        else {
            const single = { id: new Date().getTime().toString(), email, message }
            setdetail(() => {
                return [...detail, single]
            })
        }
        setemail("")
        setmessage("")
    }
    return (
        <div className='commentMain' >
            <form onSubmit={submitHandler}>
                <h2>Contact Us</h2>
                <div className="form">
                    <div className="card">

                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' value={email} onChange={(e) => setemail(e.target.value)} />
                    </div>
                    <div className="card">

                        <label htmlFor="message">Message</label>
                        <textarea id="message" cols="05" rows="10" value={message} onChange={(e) => setmessage(e.target.value)} style={{ backgroundColor: "transparent", width: "20rem", border: "1px solid gray", fontSize: ".7rem", padding: "0 1rem", color: "gray", outline: "rgb(116, 115, 115)" }}>
                        </textarea>
                    </div>
                    <button type='submit'>Send</button>

                </div>
            </form>
        </div>
    )
}

export default Cmnt