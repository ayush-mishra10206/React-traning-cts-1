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
        setcurrentSelectedProject(project)
    }

    const onClickedCancel = () =>{
        setcurrentSelectedProject({})
    }



    return (
        <div className="row">
            {projects.map((project) => (
                <div  className="cols-sm">
                    <label data-testid="listLabel">List</label>
                    {project === currentSelectedProject ?
                        <ProjectForm project={project} onClickedCancel={onClickedCancel} onClickedSave={onClickedSave}/>
                        :
                        <ProjectCard onClickEdit={onClickEdit} project={project} />

                    }

                </div>
            ))}
        </div>

    )

}
