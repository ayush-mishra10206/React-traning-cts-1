import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import Product from "../pages/productPage/Product"
import { store } from "../redux/store"
import { useEffect } from 'react';


describe('<Product/>', () => {
    test('testing product page', () => {
        render(
            <Provider store={store} >
                <Product />
            </Provider>
        )
        jest.mock('React', () => ({
            ...jest.requireActual('React'),
            useEffect: jest.fn(),
          }));

    })
})