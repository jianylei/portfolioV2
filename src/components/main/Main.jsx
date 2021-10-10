import "./main.css"

export default function Main() {
    return (
        <div className="main-container">
            <div className="dev-text-container">
                <span className="dev-text">developer.</span>
            </div>
            <div className="main-body">
                <h4>JIAN LEI</h4>
                <h2>Web Developer</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi laudantium harum commodi. Nulla unde quaerat consequuntur accusantium molestiae laudantium similique pariatur ullam quas tempora. Magnam, maxime exercitationem! Veniam, earum. Repellendus sit architecto consequuntur ad provident eveniet nesciunt quod aspernatur autem. Nulla eum, exercitationem tenetur iste et rem enim perferendis illum.
                </p>
                <div className="social-links">
                    <a href="https://github.com/jianylei" target="_blank"><i className="fab fa-github"></i></a>
                    <a href="mailto:jianyonglei@gmail.com"><i className="fas fa-envelope-square"></i></a>
                    <a href="https://www.linkedin.com/in/jianylei/" target="_blank"><i className="fab fa-linkedin"></i></a>
                </div>
                <span>
                    <h3>View Projects</h3> or
                    <h3>Read About Me</h3> or
                    <h3>Say Hi!</h3>
                </span>
            </div>
        </div>
    )
}
