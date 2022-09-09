import React,{useState} from 'react'
//Assets
import logo from '../Assets/logo.png'
import {AiFillFacebook, AiOutlineMenu ,AiFillInstagram ,AiFillTwitterSquare} from 'react-icons/ai'

//style
import '../styles/Navbar.css'



export default function NavBar() {
    const [menu, setMenu] = useState(false)
    
    
    const handleClick = () =>setMenu(!menu)


    
  return (
    
    <nav>
        <div className='navbar'>
            <img src={logo} alt="logo.png" className="logo" />
            

            <ul className="socialMedia-list">
                <li>
                <a href="#"><AiFillFacebook size={"2rem"}/></a>
                </li>
                <li>
                <a href="#"><AiFillTwitterSquare size={"2rem"}/></a>
                </li>
                <li>
                <a href="#"><AiFillInstagram size={"2rem"}/></a>
                </li>
            </ul>
            <button onClick={handleClick} className='btn-no-styling'>
                <AiOutlineMenu size={"2rem"} style={{marginLeft: 30} } />
                </button>
        </div>
                {menu  ?
                 <div className='bg-white text-center border-bottom-2 p-0'>
                 <a href="#" className='display-block p-20'>About</a>
                 <a href="#" className='display-block p-20'>Services</a>
                 <a href="#" className='display-block p-20'>Support</a>
                 <a href="#" className='display-block p-20'>Contact</a>
             </div>
                  :
                  <></>
                }
    </nav>
  )
}
