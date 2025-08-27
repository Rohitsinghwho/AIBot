import React, { useEffect } from "react";
import MessageContext from "./MessageContext";
import { useState } from "react";
const MessageProvider = ({ children }) => {
  const [IsHuman, setIsHuman] = useState(false);
  const [message, setMessage] = useState([]);
  useEffect(() => {
    const stored = localStorage.getItem("messages");
    if (stored) {
      setMessage(JSON.parse(stored));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(message));
  }, [message]);
  const AddMessage = (userMsg, botRes) => {
    const newMsg = {
      id: Date.now(),
      userMsg: userMsg,
      botRes: botRes,
      rating: 0,
      feedback: "",
    };
    setMessage((prev) => [...prev, newMsg]);
  };
  const updateMessage = (id, updates) => {
    setMessage((prev) =>
      prev.map((msg) => (msg.id === id ? { ...msg, ...updates } : msg))
    );
  };
  const saveMessagetoLocalStorage = () => {
    localStorage.setItem("messages", JSON.stringify(message));
  };
  return (
    <MessageContext.Provider
      value={{
        IsHuman,
        setIsHuman,
        message,
        AddMessage,
        updateMessage,
        saveMessagetoLocalStorage,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export default MessageProvider;
