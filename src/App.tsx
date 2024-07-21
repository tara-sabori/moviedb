import { useContext } from 'react';
import './App.css'
import Home from './pages/home/Home'
import { ThemeContext } from './context/AppContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetails from './pages/moviedetails/MovieDetails';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <BrowserRouter>
      <div className={`app ${theme}`}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<MovieDetails />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
