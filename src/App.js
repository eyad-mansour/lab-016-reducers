import './App.css';
import { Developer } from './components/Developer';
import { useReducer } from 'react';
import DevList from './components/DeveloperList';
import DeveloperForm from './components/DeveloperForm';
import Footer from './components/Footer';

function App() {
  const [developer, dispatch] = useReducer(Developer, []);
  return (
    <div className='App'>
      <DeveloperForm dispatch={dispatch} />
      <DevList devList={developer} dispatch={dispatch} />
      <Footer />
    </div>
  );
}

export default App;
