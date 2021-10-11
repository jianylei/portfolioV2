import ProjectItem from "./ProjectItem"
import "./projects.css"
import projectList from "./ProjectList"

export default function Projects() {
    const list = projectList.map((project, index)=>{
        return <ProjectItem key={index} project={project}/>
    })
    return (
        <div className="projects-container" id="projects-container">
            <h4>Personal and Academic</h4>
            <h2>Projects</h2>
            <div className="grid-container">
                {list}
            </div>
        </div>
    )
}
