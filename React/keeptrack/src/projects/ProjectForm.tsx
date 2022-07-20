import { SyntheticEvent } from "react";
import { Project } from "./Project";




interface ProjectFormProps {
    onClickedCancel: () => void;
    onClickedSave: (project: Project) => void
}

export default function ProjectForm({ onClickedCancel, onClickedSave }: ProjectFormProps) {

    const submitClicked = (event: SyntheticEvent) => {
        event.preventDefault();
        onClickedSave(new Project({ name: 'updated' }));
    }
    return (
        <form className="input-group vertical" onSubmit={submitClicked}>
            <label>Project Name</label>
            <input type="text" name="name" placeholder="enter name" />
            <label>Project Description</label>
            <textarea name="description" placeholder="enter description" />
            <label>Project Budget</label>
            <input type="number" name="budget" placeholder="enter budget" />
            <div>
                <label>Active?</label>
                <input type="checkbox" name="isActive" />
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