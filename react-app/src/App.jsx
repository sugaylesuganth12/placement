import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Course from './Course'
import Footer from './Footer'

function App() {
  

  return (

    <>
    <Navbar/>
     <Course  name="html" price="$355"/>
     <Course name />
     <Course  name="html" price="$35"/>
    <Footer></Footer>
    </>
  );
   
}

export default App
