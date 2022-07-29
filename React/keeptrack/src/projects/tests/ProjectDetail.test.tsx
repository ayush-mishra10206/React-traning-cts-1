import { render, screen,  } from "@testing-library/react"
import { Project } from "../Project";
import ProjectDetail from "../ProjectDetail"





describe("<ProjectDetail/>",()=>{
    let project:Project;

    test("test project Detail",()=>{
        render(<ProjectDetail project={new Project({
            id:12,
            name:'asfa',
            description:'asd',
            budget:234,
            contractSignedOn:new Date(),
            isActive:false,
            imageUrl:'asdasdas'
        })}/>)

        expect(screen.getByText('asfa'));
    })

    test("test is active project detail",()=>{
        render(<ProjectDetail project={new Project({
            id:12,
            name:'asfa',
            description:'asd',
            budget:234,
            contractSignedOn:new Date(),
            isActive:false,
            imageUrl:'asdasdas'
        })}/>)
        const isActive = screen.getByTestId('isActive');
        expect(isActive).toHaveTextContent('inactive')
    })

    test("test is active project detail",()=>{
        render(<ProjectDetail project={new Project({
            id:12,
            name:'asfa',
            description:'asd',
            budget:234,
            contractSignedOn:new Date(),
            isActive:true,
            imageUrl:'asdasdas'
        })}/>)
        const isActive = screen.getByTestId('isActive');
        expect(isActive).toHaveTextContent('active')
    })


})