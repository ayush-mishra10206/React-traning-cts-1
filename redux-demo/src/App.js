import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Counter, { ADD_TODO, DECREMENT, INCREMENT } from './counter';
import { createStore } from 'redux';



function reducer(state = { counter: 10 }, action) {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, data: action.payLoad }
    case INCREMENT:
      return { ...state, counter: state.counter + 1 }
    case DECREMENT:
      return { ...state, counter: state.counter - 1 }
    default:
      return state
  }
}

var store = createStore(reducer, enableDevTools());

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

function enableDevTools() {
  return (
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

export default App;
