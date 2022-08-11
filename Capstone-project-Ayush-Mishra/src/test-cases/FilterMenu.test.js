import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import FilterMenu from '../Components/FilterMenu/index.js';
import { store } from '../redux/store.js';


describe('<FilterMenu/>', ()=>{

    test('testing FilterMenu Page', () => {
        render(
            <Provider store={store}>
                <FilterMenu />
            </Provider >
        )

        const allCategory = screen.getByTestId("allCategory");
        expect(allCategory).toBeInTheDocument();
        fireEvent.click(allCategory);

        const shirtCategory = screen.getByTestId("shirtCategory");
        expect(shirtCategory).toBeInTheDocument();
        fireEvent.click(shirtCategory);

        const trousersCategory = screen.getByTestId("trousersCategory");
        expect(trousersCategory).toBeInTheDocument();
        fireEvent.click(trousersCategory);

        const shoesCategory = screen.getByTestId("shoesCategory");
        expect(shoesCategory).toBeInTheDocument();
        fireEvent.click(shoesCategory);
    })
})