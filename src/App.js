import './App.css';
import {Routes, Route} from 'react-router-dom'
import About from './About';
import Home from './Home';
import Logo from './Logo';

function App() {
  return (
    <div>
    <Home/>
      <Routes>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/logo' element={<Logo/>}/>
      </Routes>
    </div>
  );
}

export default App;
