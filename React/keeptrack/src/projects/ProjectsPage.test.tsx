import { render } from "@testing-library/react"
import renderer from 'react-test-renderer';
import ProjectsPage from "./ProjectsPage";


describe('<ProjectsPage/>',()=>{
    beforeEach(()=>{
        render(<ProjectsPage/>); 
    })
    test('working',()=>{
        console.log('working without render')
        // render(<ProjectPage/>)
    })

    xtest('snapshot',()=>{
        const tree = renderer.create(<ProjectsPage/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
});