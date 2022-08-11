import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../redux/store"
import { useEffect } from 'react';
import ProductDetails from "../pages/productPage/Product-details";


describe('<Product-details/>', () => {
    test('testing produt page', () => {
        render(

            <ProductDetails />
        )

        jest.mock('React', () => ({
            ...jest.requireActual('React'),
            useEffect: jest.fn(),
        }));

    })
})