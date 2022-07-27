import { render, screen,  } from "@testing-library/react"
import { Project } from "./Project";
import ProjectDetail from "./ProjectDetail"





describe("<ProjectDetail/>",()=>{
    let project:Project;
    beforeEach(()=>{
        project = new Project({
            id:12,
            name:'asfa',
            description:'asd',
            budget:234,
            contractSignedOn:new Date(),
            isActive:false,
            imageUrl:'asdasdas'
        })
    })

    test("test project Detail",()=>{
        render(<ProjectDetail project={project}/>)

        expect(screen.getByText(project.name));
    })

    test("test is active project detail",()=>{
        render(<ProjectDetail project={project}/>)
        const isActive = screen.getByTestId('isActive');
        expect(isActive).toHaveTextContent('inactive')
    })


})