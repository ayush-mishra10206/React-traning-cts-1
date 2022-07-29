import { SyntheticEvent, useState } from "react";
import { Project } from "./Project";
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { ProjectState } from "./state/projectTypes";
import { saveProject } from "./state/projectActions";


interface ProjectFormProps {
    project: Project;
    onClickedCancel: () => void;
    // onClickedSave: (project: Project) => void
}

export default function ProjectForm({ project: initialProject, onClickedCancel }: ProjectFormProps) {
    const [project, setProject] = useState(initialProject);
    const [errors, setErrors] = useState({
        name: '',
        description: '',
        budget: ''
    })
    const dispatch = useDispatch<ThunkDispatch<ProjectState, any, Action>>();


    function validate(project: Project) {
        let errors: any = { name: '', description: '', budget: '' };
        if (project.name.length === 0) {
            errors.name = 'Name required';
        }
        if (project.name.length > 0 && project.name.length < 3) {
            errors.name = '3 characters needed';
        }
        if (project.description.length === 0) {
            errors.description = 'Description required.';
        }
        if (project.budget === 0) {
            errors.budget = 'Budget more than 0.';
        }
        return errors;
    }

    function isValid() {
        return (
            errors.name.length === 0 &&
            errors.description.length === 0 &&
            errors.budget.length === 0
        );
    }
    const submitClicked = (event: SyntheticEvent) => {
        event.preventDefault();
        if (!isValid()) return;
        // onClickedSave(project);
        dispatch(saveProject(project));
    }

    const onChnageFormValue = (event: any) => {
        const { type, name, value, checked } = event.target;
        let updatedValue = type === 'checkbox' ? checked : value;
        if (type === 'number') {
            updatedValue = Number(updatedValue);
        }
        let updatedProject: Project;
        setProject((prevState) => {
            updatedProject = new Project({ ...prevState, [name]: updatedValue })
            return updatedProject
        })

        setErrors(() => validate(updatedProject));
    }

    return (
        <form 
        aria-label="Edit a project"
        name="projectForm"
        className="input-group vertical" onSubmit={submitClicked}>
            <label data-testid="projectName" >Project Name</label>
            <input type="text" name="name" placeholder="enter name" value={project.name} onChange={onChnageFormValue} />
            {errors.name.length > 0 && (
                <div className="card error">
                    <p>{errors.name}</p>
                </div>
            )}
            <label>Project Description</label>
            <textarea name="description" placeholder="enter description" value={project.description} onChange={onChnageFormValue} />
            {errors.description.length > 0 && (
                <div className="card error">
                    <p>{errors.description}</p>
                </div>
            )}
            <label>Project Budget</label>
            <input type="number" name="budget" placeholder="enter budget" value={project.budget} onChange={onChnageFormValue} />
            {errors.budget.length > 0 && (
                <div className="card error">
                    <p>{errors.budget}</p>
                </div>
            )}
            <div>
                <label>Active?</label>
                <input type="checkbox" name="isActive" checked={project.isActive} onChange={onChnageFormValue} />
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