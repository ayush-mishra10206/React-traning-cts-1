import logo from './logo.svg';
import './App.css';
import OrderForm from './orderform';

function App() { // constructor function 
  return (
    <div className="App">
      <header className="App-header">
       <OrderForm name="abc" ></OrderForm>
       {/* <OrderForm name="bcd" ></OrderForm> */}
       {/* <OrderForm name="bcd" ></OrderForm> */}
      </header>
    </div>
  );
}

export default App;
