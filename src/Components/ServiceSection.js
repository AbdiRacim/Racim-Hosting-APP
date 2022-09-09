import React, { useState } from 'react'

import {TiLockClosedOutline, TiGlobeOutline} from'react-icons/ti'
import {BsCodeSlash} from'react-icons/bs'
import {IoFileTrayStackedSharp} from'react-icons/io5'

import '../styles/ServiceSection.css'

export default function ServiceSection() {
    const offers =[{
        id:0,
            icon: <TiLockClosedOutline className="ion-icon"/>,
            title: "SSL certifecate",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,ea!",
            linky:'https://www.google.com',
            
        },{
            id:1,
            icon: <TiGlobeOutline className="ion-icon"/>,
            title: "Personal Domain",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,ea!",
            linky:'https://www.google.com',
        },{
            id:2,
            icon:<BsCodeSlash className="ion-icon"/> ,
            title: "Code Editor",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,ea!",
            linky:'https://www.google.com',
            
        },{
            id:3,
            icon: <IoFileTrayStackedSharp className="ion-icon"/>,
            title: "Media Storage",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,ea!",
            linky:'https://www.google.com',
            
        }
    ]
    const OffersListe = offers.map(offer =>(
        <div key={offer.id} className="offer">
        {offer.icon} 
        <h1>{offer.title}</h1>
        <p>
            {offer.para}
        </p>
        <a href={offer.linky}><h2>MORE!</h2></a>
        </div>
        ))

        
    return (
    <div className="section services">
    <div className="section-content">
      <h1>Hosting solution with benifits.</h1>
      <p>
        Turn your ideas into reality with static . <br />
        With a lot of powerfull features , <br />
        we guarantee simplicity and clarity.
      </p>
      <div className="btn-container">
        <button className="green-btn">
          <span className="btn-txt">Read more</span>
        </button>
      </div>
    </div>
    <div className="offers">
      {OffersListe}
    </div>
  </div>
  )
}
