
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Cards from './Components/Card/Card';
import { useState } from 'react';

function App() {
  const [log, setRlog] = useState(false);
  const appfn=()=>{
    setRlog(!log);

  }
  return (
    <>
      <NavBar appfn={appfn}/>
      <Home/>
      <Cards log={log}/>
      
    </>
  );
}

export default App;
