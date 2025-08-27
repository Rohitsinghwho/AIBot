import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from "../../components/Header/Header"
import { useState } from 'react'
import "./Layout.css"
import { Outlet } from 'react-router-dom'
import ChatInput from '../../components/ChatInput/ChatInput'
const Layout = () => {
   const  [toggleSidebar,settoggleSidebar]=useState(true);
  return (
    <div className='HomePage'>
        <Sidebar isOpen={toggleSidebar} onClose={()=>settoggleSidebar(false)}/>  
        <div className='mainContent'>
           <Header onToggle={()=>settoggleSidebar(!toggleSidebar)}/>
             <main className='MainContainer'>
                <Outlet/>
                <ChatInput/>
             </main>
        </div>
    </div>
  )
}

export default Layout