import React from 'react'
import logo from "../../assets/logo.png"
import "./QuickOp.css"
const QuickOp = () => {
  return (
    <div className='QuickOpContainer'>
        <div className='QOpHeading'>
            <span>How Can I Help You Today?</span>
            <img src={logo} alt="logo" />
        </div>
        <div className='Op'>
            <div className='OpTiles'>
                <span>Hi, what is the weather</span>
                <span>Get immediate AI generated response</span>
            </div>
            <div className='OpTiles'>
                <span>Hi, what is the weather</span>
                <span>Get immediate AI generated response</span>
            </div>
            <div className='OpTiles'>
                <span>Hi, what is the weather</span>
                <span>Get immediate AI generated response</span>
            </div>
            <div className='OpTiles'>
                <span>Hi, what is the weather</span>
                <span>Get immediate AI generated response</span>
            </div>
        </div>
    </div>
  )
}

export default QuickOp