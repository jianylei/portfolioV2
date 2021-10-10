import { useState } from "react"
import "./navbar.css"

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => window.onscroll = null;
    }

    return (
        <div  className={isScrolled ? "navbar-container scrolled" : "navbar-container"}>
                <div className="left">
                <h2>Jian Lei</h2>
                <h3>Web Developer</h3>
                </div>

                <div className="right">
                <span>Home</span>
                <span>About</span> 
                <span>Projects</span> 
                <span>Contact</span> 
                </div>
                
        </div>
    )
}
