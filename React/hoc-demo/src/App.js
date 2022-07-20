import logo from './logo.svg';
import './App.css';
import EnhancedComponent from './Name';
import HigherOrderComponent from './higherOrderComponent';
import ButtonComponent from './buttoncomponent';

function App() {

  const ButtonHigherOrder = HigherOrderComponent(ButtonComponent)
  return (
    <div>
      <ButtonHigherOrder/>
    </div>
  );
}

export default App;
