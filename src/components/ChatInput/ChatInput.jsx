import React, { useState ,useContext} from "react";
import MessageContext from '../../context/MessageContext';
import "./ChatInput.css";
import getBotResponse from "../../Helper/getBotResponse.js";
import { useNavigate } from "react-router-dom";
const ChatInput = () => {
 const [inputMsg,setInputMsg]=useState('');
  const {AddMessage,message,saveMessagetoLocalStorage }=useContext(MessageContext);
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();

  const handleSaveMsg=()=>{
    saveMessagetoLocalStorage();
    
  }
  const handleMessage=(e)=>{
    setInputMsg(e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(inputMsg.trim()==="")return;
    try {
      setLoading(true);
      const botResponse=getBotResponse(inputMsg);
      AddMessage(inputMsg,botResponse);
      setInputMsg('');
      navigate('/chat')
     } catch (error) {
      
     }finally{
      console.log(message)
      setLoading(false);
     }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputMsg}
        onChange={handleMessage}
        className="ChatInput"
        type="text"
        placeholder="Message Bot AI..."
      />
      <div className="Chatbtn">
        <button type="submit" className="BtnAsk">
          Ask
        </button>
        <button type="button" className="BtnSave"style={{cursor:"pointer"}} onClick={handleSaveMsg}>
          Save
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
