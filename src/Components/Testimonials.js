import React from 'react'

import  '../styles/testimonials.css'

import a1 from '../Assets/w1.jpg'
import a2 from '../Assets/ds1.jpg'
import a3 from '../Assets/hgghgh.jpg'
import a4 from '../Assets/gggg.jpg'


export default function Testimonials() {
    const users =[{
            id:0,
            image:a1 ,
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ! Lorem ipsum dolor sit.",
            namee:"Nat Reynolds",
            job:'chief accoutant',
            
        },{
            id:1,
            image:a2 ,
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ! Lorem ipsum dolor sit.",
            namee:"Celia Almeda",
            job:'Secretary',
            
        },{
            id:2,
            image: a3 ,
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ! Lorem ipsum dolor sit.",
            namee:"Bob Robert",
            job:'Sales manager',
            
        },{
            id:3,
            image: a4 ,
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ! Lorem ipsum dolor sit.",
            namee:"Mattie Smith",
            job:'Accoutant-audithor',
            
        }
    ]

    const usersListe = users.map(user =>(
        <div key={user.id} className="user">
            <div className="img-container floating">
                <img src={user.image}alt="chief.png" />
            </div>
            <p className="quote">
                {user.para}.
            </p>
            <h2>{user.namee}</h2>
            <p>{user.job}</p>
            </div>
        ))

    return (
        <section className="feedback">
        <h2>TESTIMONIALS</h2>
        <h1>What Clients Say</h1>
        <h2>
            We place huge value on strong relationships and have seen the benifit
            they bring to our business. Customer feedback is vital in helping us to
            get it right.
        </h2>
        <div className="users">
            {usersListe}
        </div>
        </section>
    )
}
