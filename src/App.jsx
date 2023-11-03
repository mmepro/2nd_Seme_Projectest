import './App.css'
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import LoginPage from './LoginPage';
import SelectedMoviesPage from './SelectedMoviesPage'; // Import the new component
import MapPage from './MapPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />}></Route>
        <Route path="/page2" element={<Page2 />}></Route>
        <Route path="/page3" element={<Page3 />}></Route>
        <Route path="/page4" element={<Page4 />}></Route>
        <Route path="/page5" element={<Page5 />}></Route>
        <Route path="/page6" element={<Page6 />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/selected-movies" element={<SelectedMoviesPage />}></Route>
        <Route path="/map" element={<MapPage />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App