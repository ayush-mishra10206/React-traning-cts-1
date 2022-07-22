import { SyntheticEvent, useState } from "react";
import { Project } from "./Project";




interface ProjectFormProps {
    project:Project;
    onClickedCancel: () => void;
    onClickedSave: (project: Project) => void
}

export default function ProjectForm({project:initialProject, onClickedCancel, onClickedSave }: ProjectFormProps) {
    const [project, setProject] = useState(initialProject);
    const submitClicked = (event: SyntheticEvent) => {
        event.preventDefault();
        onClickedSave(project);
    }
    
    const onChnageFormValue = (event:any) =>{
        const {type,name,value,checked} = event.target;
        let updatedValue = type==='checkbox'?checked:value;
        if(type==='number'){
            updatedValue = Number(updatedValue);
        }
        let updatedProject:Project;
        setProject((prevState)=>{
            updatedProject=new Project({...prevState, [name]:updatedValue})
            return updatedProject
        })
    }

    return (
        <form className="input-group vertical" onSubmit={submitClicked}>
            <label data-testid="projectName" >Project Name</label>
            <input type="text" name="name" placeholder="enter name" value={project.name} onChange={onChnageFormValue}/>
            <label>Project Description</label>
            <textarea name="descp" placeholder="enter description" value={project.descp} onChange={onChnageFormValue}/>
            <label>Project Budget</label>
            <input type="number" name="budget" placeholder="enter budget" value={project.budget} onChange={onChnageFormValue}/>
            <div>
                <label>Active?</label>
                <input type="checkbox" name="isActive" checked={project.isActive} onChange={onChnageFormValue}/>
            </div>
            <div className="input-group">
                <button className="primary bordered medium">Save</button>
                <span />
                <button onClick={onClickedCancel} type="button" className="bordered medium">
                    cancel
                </button>
            </div>
        </form>
    )
}