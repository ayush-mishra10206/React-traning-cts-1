import { Project } from "./Project"




interface ProjectCardProps{
    project:Project;
    onClickEdit:(project:Project)=>void;
}


export default function ProjectCard({project, onClickEdit}:ProjectCardProps){

    const onClickButtonPressed = () =>{
        onClickEdit(project);
    }   

    return (
        <div className="card">
            <label data-testid="projectName">Something</label>
        <img src={project.imageUrl} alt={project.name} />
        <section className="section darkgrey">
            <p className="card-title">{project.name}</p>
            <p>{project.descp}</p>
            <p>Budget : {project.budget.toLocaleString()}</p>
            <button data-testid="editBtn" onClick={onClickButtonPressed} className="bordered">
                Edit</button>
        </section>
    </div>
    )   
}