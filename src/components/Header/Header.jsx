import React from 'react'
import "./Header.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

const Header = ({onToggle}) => {
  const navigate=useNavigate()
  return (
    <header className='header'>
      <div className='hamburger' onClick={onToggle}>
        <GiHamburgerMenu size={30} color='#9785BA' />
      </div>
        <h1 onClick={()=>navigate("/")} style={{cursor:"pointer"}}>Bot AI</h1>
    </header>
  )
} 

export default Header