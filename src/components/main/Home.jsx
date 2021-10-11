import "./home.css"

export default function Home() {
    return (
            <div className="main-body">
                <h4>JIAN LEI</h4>
                <h2>Web Developer</h2>
                <p>
                    I'M A WEB DEVELOPER & PROGRAMMER LIVING IN TORONTO, ONTARIO. I MAKE WEB APPLICATIONS,
                    USUALLY WITH REACT AND NODEJS.
                </p>
                
                <span>
                    <h3>View Projects</h3> or
                    <h3>Read About Me</h3> or
                    <h3>Say Hi!</h3>
                </span>
                <div className="social-links">
                <a href="mailto:jianyonglei@gmail.com"><i className="fas fa-envelope-square"></i></a>
                    <a href="https://github.com/jianylei" rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/jianylei/" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
    )
}
