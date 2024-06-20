import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pagination from './components/Pagination';
import Content from './components/Content';

function App() {
  return (
    <Router>
      <div className='text-2xl text-blue-700 bg-white bg-gradient-to-r from-cyan-200 to-cyan-300 min-h-screen'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Content path='/' />} />
          <Route path='/search' element={< Content path='/search'/>} />
          <Route path='/category/:category' element={<Content path='/category'/>} />
          
        </Routes>
        <Pagination />
      </div>
    </Router>
  );
}

export default App;
