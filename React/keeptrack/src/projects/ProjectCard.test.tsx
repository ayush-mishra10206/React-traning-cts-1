import { fireEvent, render, screen } from "@testing-library/react"
import { MOCK_PROJECTS } from "./MockProjects";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard"
import ProjectForm from "./ProjectForm";

// const MockProjectData = {
//     id: 1,
//     name: 'Perosn1',
//     descp: 'Descp1',
//     imageUrl: '/assets/placeimg_500_300_arch4.jpg',
//     contractTypeId: 3,
//     budget: 54637,
//     isActive: false,
//     isNew: false,
// }


// xtest('edit button', () => {
//     const project = new Project();
//     const handler = () => {

//     }

//     const hndlecancel = jest.fn();
//     const handleSave = jest.fn();

//     render(<ProjectCard project={project} onClickEdit={handler} />)
//     const editBtn = screen.getByTestId('editBtn');
//     const result = fireEvent.click(editBtn);
//     console.log(result);
//     const element = screen.findByTestId('projectName');
//     console.log(element);

//     expect(element).toHaveTextContent('Project Name')
//     console.log('edit button')
//     // 
// })

describe("<ProjectCard/>",()=>{
    let project = Project;
    let handleEdit = jest.mock;
    beforeEach(()=>{
        project = new Project({
                id:1,
                name :"something",
                descp:'asdda',
                budget:100,
        });
        handleEdit = jest.fn();
    })
    xtest("should render initially ", ()=>{
        console.log('project card')
        render(<ProjectCard project={project} onClickEdit={handleEdit}/>)
    });
});