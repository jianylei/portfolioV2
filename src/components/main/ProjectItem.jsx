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
                <a className="project-link" href={project.live} target="_blank">LIVE</a>
                <span> | </span> 
                </>
            )
        }
    }

    return (
        <div className="grid" style={{backgroundImage: `url(${project.image})`, 
                                        color:`${project.color}`}}>
            <div className="project-detail">
                {checkLive()}
                <a className="project-link" href={project.source} target="_blank">SOURCE</a>
                <h3>{project.name}</h3>
                <div className="hidden-detail">
                    <p>{project.description}</p>
                    <legend>Technologies used:</legend>
                    <ul>
                        {skills}
                    </ul>
                </div>
            </div>
        </div>
    )
}
