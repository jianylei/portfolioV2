import About from "../about/About"
import Contact from "../contact/Contact"
import Home from "./Home"
import "./main.css"
import Projects from "../projects/Projects"

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
