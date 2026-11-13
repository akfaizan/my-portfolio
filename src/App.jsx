import CustomCursor from "./components/CustomCursor"
import IntroAnimation from "./components/IntroAnimation"
import Navbar from "./components/Navbar"
import ParticlesBackground from "./components/ParticlesBackground"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import Footer from "./sections/Footer"
import Home from "./sections/Home"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import {useState} from 'react'

function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
    {!introDone && <IntroAnimation onFinish={()=>setIntroDone(true)}/>}

     {introDone && (
        <div className="relative gradient text-[#ffffff]">
          {/* <ParticlesBackground/> */}
          <CustomCursor/>
          <Navbar/>
          <Home/>
          <About/>
          <Skills/>
          <Projects/>
          {/* <Experience/> */}
          <Contact/>
          <Footer/>
        </div>
      )} 
    </>
  )
}

export default App
