import { render, screen } from "@testing-library/react"
import { Project } from "./Project";
import ProjectList from "./ProjectList"




xtest('project list',()=>{
    const project=[new Project()];
    const handleSave = jest.fn();
    render(<ProjectList projects={project} onClickedSave={handleSave}/>);
    const element = screen.findByTestId('listLabel');
    console.log(element)
})