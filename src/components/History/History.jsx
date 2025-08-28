import React, { useContext, useEffect, useState } from 'react'
import "./History.css"
import "../Chat/Chat.css"
import Person from "../../assets/logo.png";
import logo from "../../assets/p.png"
import MessageContext from '../../context/MessageContext';
const History = () => {
  const [message]=useContext(MessageContext);
  return (
    <div className='HistoryContainer'>
         <span>Conversation History</span>
         <div>
            <div><span>Today's Chats</span></div>
              <div className="HistoryChatCon">
                    {message.map((msg) => (
                        <div key={msg.id} className="ChatInner">
                        {/* User message */}
                        <div className="ChatContainer">
                            <img src={Person} alt="user" />
                            <div className="ChatContainerItems">
                            <div className="ChatContainerText">
                                <span>You</span>
                                <div >{msg.userMsg}</div>
                            </div>
                            </div>
                        </div>
            
                        {/* Bot response */}
                        <div className="ChatContainerHistory" style={{marginTop:"0px"}}>
                            <img src={logo} alt="bot" />
                            <div className="ChatContainerItems">
                            <div className="ChatContainerText">
                                <span>Soul AI</span>
                                <div>{msg.botRes}</div>
                            </div>
            
                            
                            <div className="ChatCon">
                                <div className='ChatRatingAD'>
                                <span>10:23 AM</span>
                                <div className="rating">

                                </div>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                    
                                        key={star}
                                        style={{
                                        color: star <= (msg.rating || 0) ? "#FFA500" : "#ccc",
                                        fontSize: "16px",
                                        }}
                                    >
                                        ★
                                    </span>
                                    ))}
                             
                                </div>
                                {msg.feedback&&(

                                    <div className='ChatFeedback'>
                                    <span className='ChatFText'>Feedback: </span>
                                    <span className='Feedbackmsg'>{msg.feedback}</span>
                                    </div>
                                )}
                            </div>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
         </div>
    </div>
  )
}

export default History