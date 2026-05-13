import NavBar from './components/Navbar/navbar'
import HomePage from './components/HomePage/home'
import AboutPage from './components/AboutPage/about'
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
        </>
      )}
        {activeSection === "about" && <AboutPage />}
        {/* {activeSection === "work" && <Work />}
        {activeSection === "tech" && <Tech />} */}
    </>
  )
}

export default App