import { render, screen } from "@testing-library/react"
import renderer from 'react-test-renderer';
import ProjectsPage from "../ProjectsPage";
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { notDeepEqual } from "assert";
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { url as projectUrl } from "../projectApi";
import { MOCK_PROJECTS } from "../MockProjects";


const server = setupServer(
    rest.get(projectUrl,(req, res, ctx)=>{
        return res(ctx.json(MOCK_PROJECTS));
    })
)


describe('<ProjectsPage/>', () => {

    beforeAll(()=>server.listen());
    afterEach(()=>server.resetHandlers());
    afterAll(()=>server.close());

    test('working', () => {
        console.log('working without render')
        expect(screen).toBeDefined();
        // render(<ProjectPage/>)
    })

    test('testing loading component ', async () => {
        render(
            <MemoryRouter>
                <ProjectsPage />
            </MemoryRouter>)
            expect(screen.getByText(/loading/i)).toBeInTheDocument();
    })

    test('testing more button ', async()=>{
        render(
            <MemoryRouter>
                <ProjectsPage />
            </MemoryRouter>)
            expect(screen.queryByRole('button',{name:/more/i})).not.toBeInTheDocument()
    })

    test("should display project",async ()=>{
        render(
            <MemoryRouter>
                <ProjectsPage />
            </MemoryRouter>)
            expect(await screen.findAllByRole("img" )).toHaveLength(MOCK_PROJECTS.length);

    })



    xtest('snapshot', () => {
        const tree = renderer.create(<ProjectsPage />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});