import { Project } from "./Project"




interface ProjectCardProps {
    project: Project;
    onClickEdit: (project: Project) => void;
}


export default function ProjectCard({ project, onClickEdit }: ProjectCardProps) {

    const onClickButtonPressed = () => {
        onClickEdit(project);
    }

    return (
        <div className="card">
            <div></div>
            <label data-testid="projectName">something</label>
            <img src={project.imageUrl} alt={project.name} />
            <section className="section darkgrey">
                <h5 className="strong">
                    <strong>{project.name}</strong>
                </h5>
                <p>{project.descp}</p>
                <p>Budget:{project.budget}</p>
                <button data-testid="editBtn" onClick={onClickButtonPressed} className="bordered">
                    Edit</button>
            </section>
        </div>
    )
}