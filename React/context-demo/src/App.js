import logo from './logo.svg';
import './App.css';
import ContextDemo from './withoutContext/contextDemo';
import ContextApi from './withContext/contextApi';
import ContextDemoClass from './withoutContextClass/contextdemo';
import ContextApiClass from './withContextClass/contextdemo';
import ContactForm from './FormComponent';
import UncontrolledForm from './UncontrolledForm';

function App() {
  return (
    <div>
     {/* <ContextDemo></ContextDemo> */}
     {/* <ContextApi/> */}
     {/* <ContextDemoClass/> */}
     {/* <ContextApiClass/> */}
     {/* <ContactForm/> */}
     <UncontrolledForm/>
    </div>
  );
}

export default App;
