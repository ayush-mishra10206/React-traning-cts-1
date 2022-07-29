import { render, screen, fireEvent } from "@testing-library/react"
import renderer from 'react-test-renderer';
import ProjectsPage from "../ProjectsPage";
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { notDeepEqual } from "assert";
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { url as projectUrl } from "../projectApi";
import { MOCK_PROJECTS } from "../MockProjects";
import { Provider } from 'react-redux';
import { store } from "../../state";

const server = setupServer(
    rest.get(projectUrl, (req, res, ctx) => {
        return res(ctx.json(MOCK_PROJECTS));
    })
)


describe('<ProjectsPage/>', () => {

    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    test('working', () => {
        console.log('working without render')
        expect(screen).toBeDefined();
        // render(<ProjectPage/>)
    })

    test('testing loading component ', async () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <ProjectsPage />
                </MemoryRouter>
            </Provider>
        )
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    })

    xtest('testing more button ', async () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <ProjectsPage />
                </MemoryRouter>
            </Provider>
        )
        await new Promise((r) => setTimeout(r, 2000));
        const user = userEvent.setup();
        await user.click(screen.getByRole("button", { name: /moreBtn/i, hidden:true }));


        // expect(screen.queryByRole('button', { name: /more/i })).toBeInTheDocument()
    })

    test("should display project", async () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <ProjectsPage />
                </MemoryRouter>
            </Provider>
        )
        expect(await screen.findAllByRole("img")).toHaveLength(MOCK_PROJECTS.length);

    })



    xtest('snapshot', () => {
        const tree = renderer.create(<ProjectsPage />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});