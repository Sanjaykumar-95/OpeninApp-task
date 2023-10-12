import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoard from './components/Dashboard';
import './App.css';
import Login from './components/login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<DashBoard />} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
