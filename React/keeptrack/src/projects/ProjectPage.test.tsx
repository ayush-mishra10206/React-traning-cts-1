import { render } from "@testing-library/react"
import ProjectPage from "./ProjectsPage"
import renderer from 'react-test-renderer';


describe('<ProjectPage/>',()=>{
    beforeEach(()=>{
        render(<ProjectPage/>); 
    })
    xtest('working',()=>{
        console.log('working without render')
        // render(<ProjectPage/>)
    })

    xtest('snapshot',()=>{
        const tree = renderer.create(<ProjectPage/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
});