import React from 'react';
import { Provider } from 'react-redux';
import Container from './Container';
import { store } from './store';





export default function ReactReduxThunk() {
    return (
        <div>
            <Provider store={store}>
                <Container />
            </Provider>
        </div>
    );
}