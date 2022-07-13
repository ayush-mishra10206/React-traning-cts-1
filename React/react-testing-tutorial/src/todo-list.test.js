import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import ToDoList from "./todo-list";



jest.mock("axios");
const toDodummyData = [
    {
        userId: 1,
        id: 1,
        title: "abc",
        completed: false,
    },
    {
        userId: 1,
        id: 2,
        title: "def",
        completed: false,
    },
    {
        userId: 1,
        id: 3,
        title: "ghi",
        completed: false,
    },
]
test("check todo list", async() => {
    axios.get.mockResolvedValue({data:toDodummyData});
    render(<ToDoList/>);
    const todoList = await waitFor(()=> screen.findAllByTestId("todo"));
    expect(todoList).toHaveLength(3);
})