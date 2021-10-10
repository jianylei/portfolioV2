import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
import "./main.css"
import Projects from "./Projects"

export default function Main() {
    return (
        <div className="main-container">
            <div id="top-link"/>
            <div className="dev-text-container">
                <span className="dev-text">developer.</span>
            </div>
            <Home/>
            <Projects/>
            <About/>
            <Contact/>
        </div>
    )
}
