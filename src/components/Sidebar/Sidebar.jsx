import React, { useState } from 'react'
import "./Sidebar.css"
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png"
const Sidebar = ({isOpen,onClose}) => {

  
  return (
    <div className={`sidebar ${isOpen?"open":""}`}>
        <div className='sidebarHeading'>
            <img src={logo} alt="logo" />
            <Link to='/'>New Chat</Link>
            <FaRegEdit size={20} style={{cursor:'pointer'}} />
            <button className='CloseBtn' onClick={onClose}>X</button>
        </div>
        <a href='/history'  className='sidebarPastConvoHeading' >
            Past Conversations
        </a>
        <div className='sidebarPastConvo'>
             
        </div>
    </div>
  )
}

export default Sidebar