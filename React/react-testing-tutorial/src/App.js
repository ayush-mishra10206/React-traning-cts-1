import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import ToDoList from './todo-list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Counter />
       {/* <ToDoList/> */}
      </header>
    </div>
  );
}

export default App;
