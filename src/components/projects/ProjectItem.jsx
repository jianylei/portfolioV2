export default function ProjectItem({project}) {
    const skills = project.skill.map((skill, index)=>{
        return(
            <li key={index}>{skill.name}</li>
        )
    })

    const checkLive = () =>{
        if(project.live){
            return(
                <>
                <a className="project-link" href={project.live} rel="noopener noreferrer" target="_blank">LIVE</a>
                <span> | </span> 
                </>
            )
        }
    }

    const checkSource = () =>{
        if(project.source && !project.company){
            return(
                <>
                <a className="project-link" href={project.source} rel="noopener noreferrer" target="_blank">SOURCE</a>
                </>
            )
        }
        return(
            <>
                <a className="project-link"  href={project.source} rel="noopener noreferrer" target="_blank">
                    <span> {project.company} </span> {project.date}
                </a>
            </>
        )
    }

    const checkDesc = () =>{
        if(project.description){
            return(
                <p>{project.description}</p>
            )
        }

        const responsibility = project.responsibilities.map((res, index) => {
            return (
                <li key={index}>{res.task}</li>
            )
        })

        return(
            <ul className="responsibilities">
                {responsibility}
            </ul>
        )
    }

    return (
        <div className="grid" style={{backgroundImage: `url(${project.image})`, 
                                        color:`${project.color}`}}>
            <div className="project-detail">
                {checkLive()}
                {checkSource()}
                <h3>{project.name}</h3>
                <div className="hidden-detail">
                    {checkDesc()}
                    <legend>Technologies used:</legend>
                    <ul className="skills">
                        {skills}
                    </ul>
                </div>
            </div>
        </div>
    )
}
