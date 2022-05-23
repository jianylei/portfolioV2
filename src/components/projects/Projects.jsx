import ProjectItem from "./ProjectItem"
import "./projects.css"
import projectList from "./ProjectList"

export default function Projects() {
    const list = projectList.map((project, index)=>{
        return <ProjectItem key={index} project={project}/>
    })
    return (
        <div className="projects-container" id="projects-container">
            <h4>Work and Projects</h4>
            <h2>Experience</h2>
            <div className="grid-container">
                {list}
            </div>
        </div>
    )
}