import "./skills.css"

export default function Skills({skill}) {
    const list = skill.skill.map((skill, index)=>{
        return(
                <h5 key={index}>{skill.name}</h5>
        )
    })

    return (
        <div className="skill-container">
            <h3>{skill.type}</h3>
            <div className="skill-item">
                {list}
            </div>
        </div>
    )
}
