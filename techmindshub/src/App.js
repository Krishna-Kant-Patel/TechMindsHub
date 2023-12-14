
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Cards from './Components/Card/Card';
import Places from './Components/Places/Places';

function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <div><Cards/>
      <Places/> </div>
    </>
  );
}

export default App;
