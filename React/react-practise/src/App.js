import logo from './logo.svg';
import './App.css';
import Clock from './main';
import Parent from './parenttochild';
import Parent1 from './childtoparent';

function App() {
  return (
    <div className="App">
      <Clock />
      <Parent/>
      <Parent1/>
    </div>
  );
}

export default App;
