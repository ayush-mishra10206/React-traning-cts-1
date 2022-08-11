import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../redux/store"
import { useEffect } from 'react';
import Contact from "../pages/Contact";


describe('<Contact/>', () => {
    test('testing contatc page', () => {
        render(

            <Contact />
        )

        jest.mock('React', () => ({
            ...jest.requireActual('React'),
            useEffect: jest.fn(),
        }));


    })
})