import { render, screen, fireEvent } from "@testing-library/react"
import { MOCK_PROJECTS } from "../MockProjects";
import { Project } from "../Project";
import ProjectList from "../ProjectList"
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from "../../state";

describe("<ProjectList/>", () => {
    let handleSave = jest.fn();
    test("initial render project list ", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <ProjectList projects={MOCK_PROJECTS} />
                </MemoryRouter>
            </Provider>
        )
        console.log("working project list")
    })

    test("should display list ", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <ProjectList projects={MOCK_PROJECTS} />
                </MemoryRouter>
            </Provider>
        )

        expect(screen.getAllByRole("heading")).toHaveLength(MOCK_PROJECTS.length);
        expect(screen.getAllByRole("img")).toHaveLength(MOCK_PROJECTS.length);
    })

    test("testing function for edit ", async () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <ProjectList projects={MOCK_PROJECTS} />
                </MemoryRouter>
            </Provider>
        )
        // const user = userEvent.setup();
        // await user.click(screen.getByTestId("editBtn"))
        const editBtn = screen.getByRole("button", { name: /edit Perosn1/i });
        fireEvent.click(editBtn);
        expect(screen.getByRole("form", { name: /edit a project/i })).toBeInTheDocument();

    })

    test("testing image in project card ", async () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <ProjectList projects={MOCK_PROJECTS} />
                </MemoryRouter>
            </Provider>
        )

        // const editBtn = screen.getByRole("button", { name: /edit Perosn1/i });
        // fireEvent.click(editBtn)
        const user = userEvent.setup();
        await user.click(screen.getByRole("button", { name: /edit Perosn1/i }));
        await user.click(screen.getByRole("button", { name: /cancel/i }))
        // expect(screen.getByRole("img", { name: /perosn1/i })).toBeInTheDocument();
        expect(screen.queryByRole("form", { name: /edit a project/i })).not.toBeInTheDocument()
    })
})
