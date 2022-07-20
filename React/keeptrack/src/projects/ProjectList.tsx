import { useState } from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";



interface ProjectListProps {
    projects: Project[]
    onClickedSave:(project:Project)=>void
}

export default function ProjectList({ projects, onClickedSave }: ProjectListProps) {
    console.log('project : ', projects)
    const [currentSelectedProject, setcurrentSelectedProject] = useState({})
    const onClickEdit = (project: Project) => {
        console.log('edit button Clickedd : ', project)
        setcurrentSelectedProject(project)
    }

    const onClickedCancel = () =>{
        setcurrentSelectedProject({})
    }



    return (
        <div className="row">
            {projects.map((project) => (
                <div className="cols-sm">

                    {project === currentSelectedProject ?
                        <ProjectForm onClickedCancel={onClickedCancel} onClickedSave={onClickedSave}/>
                        :
                        <ProjectCard onClickEdit={onClickEdit} project={project} />

                    }

                </div>
            ))}
        </div>

    )

}