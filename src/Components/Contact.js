import React ,{useState} from 'react'

import '../styles/Contact.css'

// Assets
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { FiPhoneCall, FiMail } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';

export default function Contact() {

    const [feedback,setFeedback]= useState({
        name:"",
        email:"",
        message:"",
    })

    const handleSubmit = (event) => {
        event.preventDefault()/*mayekheliche la page teraferichi */
        console.log(feedback)
        alert(feedback.name +"\n"+feedback.email+"\n" +feedback.message)
    }

  return (
        <footer>
        <div className="container">
            <div className="contact-info">
            <h2>Contact info</h2>
            <div className="info">
            <FiPhoneCall size={"1.5rem"} className='ion-icon'/>
                <p>+1 (234) 567-8910</p>
            </div>
            <div className="info">
            <FiMail size={"1.5rem"} className='ion-icon'/>
                <p>contact@yourmail.com</p>
            </div>
            <div className="info">
            <IoLocationOutline size={"2rem"} className='ion-icon'/>
                <p>203, Evanto Labs, Behind Alis Street , Australia</p>
            </div>
            <div className="info">
            <AiFillFacebook size={"1.5rem"} className='ion-icon'/>
            <AiFillInstagram size={"1.5rem"} className='ion-icon'/>
            <AiFillTwitterCircle size={"1.5rem"} className='ion-icon'/>
            <AiFillYoutube size={"1.5rem"} className='ion-icon'/>
            </div>
            </div>

            <form className="form" onSubmit={handleSubmit}>
            <div className="input-container">
                <input
                type="text"
                className="field"
                placeholder="Enter your name"
                id="name"
                name="name"
                value={feedback.name}
                onChange={(event) => setFeedback({...feedback, name: event.target.value})}
                />
                <label for="name"> Enter your name</label>
            </div>
            <div className="input-container">
                <input
                type="email"
                className="field"
                placeholder="Enter a valid email adress"
                id="email"
                name="email"
                value={feedback.email}
                onChange={(event) => setFeedback({...feedback, email: event.target.value})}
                />
                <label for="email"> Enter a valid email adress</label>
            </div>
            <div className="input-container msg-container">
                <textarea
                placeholder="Enter your message"
                className="field"
                rows="8"
                id="comment"
                value={feedback.message}
                onChange={(event) => setFeedback({...feedback, message: event.target.value})}
                ></textarea>
                <label for="comment" className="msg-label"> Enter your message</label>
            </div>
            <input 
               
                type="submit"
                className="field submit"
                value="SUBMIT"
                id="submit"
            />
            </form>
        </div>
        </footer>
  )
}
