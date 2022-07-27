import { fireEvent, render, screen } from "@testing-library/react"
import { Project } from "./Project";
import ProjectCard from "./ProjectCard"
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

// const MockProjectData = {
//     id: 1,
//     name: 'Perosn1',
//     description: 'Descp1',
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

describe("<ProjectCard/>", () => {
    let project: Project;
    // let handleEdit = jest.mock;
    let handleEdit = jest.fn();
    beforeEach(() => {
        project = new Project(
            {
                id: 1,
                name: "something",
                description: 'asdda',
                budget: 100,
            }
        );

    })
    xtest("should render initially ", () => {
        console.log('project card')
        render(
            <MemoryRouter>
                <ProjectCard project={project} onClickEdit={handleEdit} />
            </MemoryRouter>
        )
    });
    xtest("project render", () => {
        render(
            <MemoryRouter>
                <ProjectCard project={project} onClickEdit={handleEdit} />
            </MemoryRouter>
        )
        // expect(screen.getByRole('heading')).toHaveTextContent(project.name);
        expect(screen.getByTestId('projectName')).toHaveTextContent('something')
        expect(screen.getByText('asdda'));
        expect(screen.getByText('Budget:100'));
    })

    test('handler called when edit ', async () => {
        render(
            <MemoryRouter>
                <ProjectCard project={project} onClickEdit={handleEdit} />
            </MemoryRouter>
        )
        // const editBtn = screen.getByTestId('editBtn');
        // fireEvent.click(editBtn);
        // expect(handleEdit).toBeCalledTimes(1);
        // expect(handleEdit).toBeCalledWith(project);
        const user = userEvent.setup();
        await user.click(screen.getByTestId('editBtn'));
        expect(handleEdit).toBeCalledTimes(1);
    })
    test("snapShot ", () => {
        const tree = renderer.create(
            <MemoryRouter>
                <ProjectCard project={project} onClickEdit={handleEdit} />
            </MemoryRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();

    })
});