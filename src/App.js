
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Customer from './Pages/Customer';
import Garage from './Pages/Garage';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Navbar from './Shared/Navbar';
import PageNotFound from './Shared/PageNotFound';

function App() {
  return (
    <div >
     <Navbar></Navbar>
     <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/garage' element={<Garage/>}/>
    <Route path='/customer/review' element={<Customer/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='*' element={<PageNotFound/>}/>
     </Routes>
    </div>
  );
}

export default App;
