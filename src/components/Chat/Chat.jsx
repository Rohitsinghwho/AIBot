    import React, { useContext, useState } from "react"
    import MessageContext from "../../context/MessageContext";
    import logo from "../../assets/logo.png";
    import Person from "../../assets/p.png";
    import { SlLike, SlDislike } from "react-icons/sl";
    import { IoIosStarOutline } from "react-icons/io";
    import { TbBulb } from "react-icons/tb";

    import "./Chat.css"
    const Chat = () => {
    const { message, updateMessage } = useContext(MessageContext);
    const [rating, setRating] = useState(0);
    const [showModal,setShowModal]=useState(false);
    const [currentMsgId,setCurrentMsgId]=useState(null);
    const [Feedback,setFeedback]=useState('');
    useEffect(() => {
    if (message && message.length > 0) {
      localStorage.setItem("messages", JSON.stringify(message));
    }
    }, [message]);
    const handleStarClick=(id,value)=>{
        setCurrentMsgId(id);
        setRating(value);
        setShowModal(true);
    }
   const handleSubmitFeedback=()=>{

    try {
         if(currentMsgId!=null){
        updateMessage(currentMsgId,{rating:rating,feedback:Feedback});
        }
        setFeedback("");
        setShowModal(false);
        setCurrentMsgId(null);
    } catch (error) {
        alert("Error in Submitting feedback!!")
    }finally{
       
    }
   
   }
    
    return (
        <div className="ChatContainerMain">
        {message.map((msg) => (
            <div key={msg.id} className="ChatInner">
            {/* User message */}
            <div className="ChatContainer">
                <img src={Person} alt="user" />
                <div className="ChatContainerItems">
                <div className="ChatContainerText">
                    <span>You</span>
                    <p>{msg.userMsg}</p>
                </div>
                </div>
            </div>

            {/* Bot response */}
            <div className="ChatContainer">
                <img src={logo} alt="bot" />
                <div className="ChatContainerItems">
                <div className="ChatContainerText">
                    <span>Soul AI</span>
                    <p>{msg.botRes}</p>
                </div>

                
                <div className="ChatContainerFooter">
                    <span>10:23 AM</span>
                    <div className="likeDislike">
                    <SlLike
                        style={{ cursor: "pointer" }}
                        onClick={() => handleRating(msg.id, 1)}
                    />
                    <SlDislike
                        style={{ cursor: "pointer" }}
                        onClick={() => handleRating(msg.id, -1)}
                    />
                    <div className="rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                        <span
                        
                            key={star}
                            style={{
                            cursor: "pointer",
                            color: star <= (msg.rating || 0) ? "#FFA500" : "#ccc",
                            fontSize: "16px",
                            }}
                            onClick={() => handleStarClick(msg.id ,star)}
                        >
                            ★
                        </span>
                        ))}
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        ))}

        {showModal&&(<div className="FeedbackContainer">
            <div className="FeedbackHeading">
                <div className="FeedbackHeadingLogo">
                <TbBulb size={30}/>
                <span>Provide Additional Feedback</span>
                </div>
                <button className="btnClose" onClick={()=>setShowModal(false)}>X</button>
            </div>

            <textarea type="text" className="FeedbackInput" value={Feedback} onChange={(e)=>setFeedback(e.target.value)}/>
            <div className="submitContainer">
                <button className="btnSubmit" onClick={handleSubmitFeedback}>Submit</button>
            </div>
        </div>)}
        </div>
    );
    };

    export default Chat;
