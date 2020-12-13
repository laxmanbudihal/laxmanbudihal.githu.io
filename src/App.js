import React from 'react'
import Navigation from "./components/Navigation"
import Home from "./components/Home"
import Projects from "./components/Project"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const App=()=>{
  return (

    <div>
    <Navigation />
    <Home />
    <Projects />
    <Contact />
    <Footer/>

    </div>

  );
}

export default App;
