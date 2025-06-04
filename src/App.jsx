import React from 'react'
import NavBar from './components/NavBar'
import Main from './components/Main'
import Footer from './components/Footer'
import Loading from './components/Loading'
import { useState, useEffect } from 'react'

function App() {
  const [loaded, setIsLoaded] = useState(false)
  
  return (
    <>
      {!loaded && (<Loading onComplete={() => { setIsLoaded(true) }} />)} {" "}
        <div className={`min-h-screen transition-opacity duration-700  ${loaded ? "opacity-100" : "opacity-0"} `}>
        <NavBar />
        <Main />
        <Footer />

      </div>
    </>
  )
}

export default App
