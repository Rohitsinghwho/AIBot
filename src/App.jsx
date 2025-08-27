import React, { useState } from 'react'
import Layout from './Pages/Home/Layout'
import Home from './Pages/Home/Home'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import Chat from './components/Chat/Chat'
import History from './components/History/History'

const App = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/history" element={<History/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App