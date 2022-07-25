import { render } from "@testing-library/react"
import ProjectPage from "./ProjectsPage"
import renderer from 'react-test-renderer';


describe('<ProjectPage/>',()=>{
    beforeEach(()=>{
        render(<ProjectPage/>); 
    })
    test('working',()=>{
        console.log('working without render')
        // render(<ProjectPage/>)
    })

    test('snapshot',()=>{
        const tree = renderer.create(<ProjectPage/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
});