import {useState} from "react";
import "./Navbar.css";
import { Menu } from "lucide-react";

type NavbarProps = {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
};

function Navbar( {activeSection, setActiveSection}: NavbarProps ) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">Manvendra</div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu/>
        </button>
        
        <div className={`navbar-routes ${menuOpen ? "open" : ""}`}>
          <button className={activeSection === "home" ? "active" : ""} 
            onClick={() => {
              setActiveSection("home")
              setMenuOpen(false)
            }}>
            Home
          </button>
          <button className={activeSection === "about" ? "active" : ""} 
            onClick={() => {
              setActiveSection("about")
              setMenuOpen(false)
            }}>
            About
          </button>
          <button className={activeSection === "work" ? "active" : ""} 
            onClick={() => {
              setActiveSection("work")
              setMenuOpen(false)
            }}>
            My Work
          </button>
          <button className={activeSection === "tech" ? "active" : ""} 
            onClick={() => {
              setActiveSection("tech")
              setMenuOpen(false)
            }}>
            Tech Used
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar;