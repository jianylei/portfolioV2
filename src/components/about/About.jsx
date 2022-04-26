import "./about.css"
import Skills from "./Skills"
import skillsList from "./SkillList"

export default function About() {
    const list = skillsList.map((skill, index) => {
        return <Skills key={index} skill={skill} />
    })
    return (
        <div className="about-container" id="about-container">
            <h4>my journey</h4>
            <h2>About</h2>
            <p className="about-text">
                Hi, my name is Jian! Through work experience, academic studies,
                as well as working on personal projects, I have gained extensive knowledge 
                on skills such as object-orientated programming with C++/Java, along with full stack web development
                using React and Node.js + Express.js. I have also
                gained a strong fundamental understanding of relational and non-relational
                databases - from designing and creating a schema - to
                incorporating the database within an application, and then to interact
                with the data using SQL.
                <br /> <br />
                I enjoy work that can challenge me to learn something new, 
                whether it be a new language or technology - I am always on the lookout for exciting
                projects to work on, contact me and let's collab!
            </p>
            <div className="skills-grid-container">
                {list}
            </div>
        </div>
    )
}