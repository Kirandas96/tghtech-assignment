import axios from 'axios';
import { Route, Routes } from 'react-router';
import './App.css';
import { Bookmark } from './Components/Bookmark';
import { Home } from './Components/Home';

function App() {

  return (
    <div className="App">
      
      <Routes>
      <Route path="/bookmark" element={<Bookmark/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
          
    </div>
  );
}

export default App;
