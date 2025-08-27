import React, { useState } from 'react'
import "./Sidebar.css"
import { FaRegEdit } from "react-icons/fa";

import logo from "../../assets/logo.png"
import { useNavigate } from 'react-router-dom';
const Sidebar = ({isOpen,onClose}) => {
  const navigate =useNavigate();
  const handlePastCovo=()=>{
      navigate('/history');
  }
  return (
    <div className={`sidebar ${isOpen?"open":""}`}>
        <div className='sidebarHeading'>
            <img src={logo} alt="logo" />
            <span>New Chat</span>
            <FaRegEdit size={20} style={{cursor:'pointer'}} />
            <button className='CloseBtn' onClick={onClose}>X</button>
        </div>
        <button className='sidebarPastConvoHeading' onClick={handlePastCovo}>
            Past Conversations
        </button>
        <div className='sidebarPastConvo'>
             
        </div>
    </div>
  )
}

export default Sidebar