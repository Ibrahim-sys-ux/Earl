import { useState } from 'react'
import Header from './conatainer/Header'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css'
import Home from './conatainer/Home'
import About from './conatainer/About'
import Features from './conatainer/Features'
import Menu from './conatainer/Menu'
import Reservations from './conatainer/Reservations'
import Booking from './conatainer/Booking'
import SpecialtiesSlider from './conatainer/SpecialtiesSlider'
import ClientFeedback from './conatainer/ClientFeedback'
import BlogSection from './conatainer/BlogSection'
import Footer from './conatainer/Footer'

function App() {

  return (
    <>
    {/* <Router>
      <Routes>
        <Route path="/home" element={<Header />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<BlogSection/>}/>
        <Route path='/portfolio' element={<Features/>}/>
        <Route path='/shop' element={<SpecialtiesSlider/>}/>
        <Route path='/contact' element={<Booking/>}/>
      </Routes>
    </Router> */}
      <Header/>
      <Home/>
      <About/>
      <Features/>
      <Menu/>
      <Reservations/>
      <Booking/>
      <SpecialtiesSlider/>
      <ClientFeedback/>
      <BlogSection/>
      <Footer/>
    </>
  )
}

export default App
