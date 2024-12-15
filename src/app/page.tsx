import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Footer from './components/Footer';

 const page = () => {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Contact/>
      <Footer/>
      
    </div>
  )
 }
 export default page
