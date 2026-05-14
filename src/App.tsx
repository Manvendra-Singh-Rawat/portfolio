import NavBar from './components/Navbar/navbar'
import HomePage from './components/HomePage/home'
import AboutPage from './components/AboutPage/about'
import WorkPage from './components/WorkPage/work'
import TechPage from './components/TechPage/tech'
import Footer from './components/Footer/footer'
import { useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <>
      <NavBar activeSection={activeSection} setActiveSection={setActiveSection}/>
      {activeSection === "home" && (
        <>
        <HomePage/>
        <AboutPage/>
        <WorkPage/>
        <TechPage/>
        </>
      )}
        {activeSection === "about" && <AboutPage />}
        {activeSection === "work" && <WorkPage />}
        {activeSection === "tech" && <TechPage />}
      <Footer/>
    </>
  )
}

export default App