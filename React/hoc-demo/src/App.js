import logo from './logo.svg';
import './App.css';
import EnhancedComponent from './Name';
import HigherOrderComponent from './higherOrderComponent';
import ButtonComponent from './buttoncomponent';
import SliderComponent from './sliderComponent';

function App() {

  const ButtonHigherOrder = HigherOrderComponent(ButtonComponent)
  const SliderHigherOrder = HigherOrderComponent(SliderComponent)
  return (
    <div>
      <ButtonHigherOrder/>
      <SliderHigherOrder/>
    </div>
  );
}

export default App;
