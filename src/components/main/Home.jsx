import "./home.css"
export default function Home() {
    return (
            <div className="main-body">
                <h4>JIAN LEI</h4>
                <h2>Web Developer</h2>
                <p>
                    I'm a Web Developer & Programmer living in Toronto, Ontario. I make web applications, 
                    usually with React and NodeJs.
                </p>
                
                <span>
                    <a href="#projects-container"><h3>View Work</h3></a>
                     or
                    <a href="#about-container"><h3>Read About Me</h3></a>
                     or
                    <a href="#contact-container"><h3>Say Hi!</h3></a>
                </span>
                <div className="social-links">
                    <a href="mailto:jianyonglei@gmail.com"><i className="fas fa-envelope-square"></i></a>
                    <a href="https://github.com/jianylei" rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/jianylei-dev/" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
    )
}
