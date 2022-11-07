
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Booking from './Pages/Booking/Booking';
import Customer from './Pages/Customer';
import Dashboard from './Pages/Dashboard/Dashboard';
import Garage from './Pages/Garage';
import GarageDetails from './Pages/GarageDetails';
import Home from './Pages/Home';
import Login from './Pages/Login';
import RequireAuth from './Pages/RequireAuth';
import Signup from './Pages/Signup';
import Navbar from './Shared/Navbar';
import PageNotFound from './Shared/PageNotFound';

function App() {
  return (
    <div >
     <Navbar></Navbar>
     <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/garage' element={<RequireAuth>
      <Garage/>
    </RequireAuth>}/>
    <Route path='/garage/:garageId' element={<GarageDetails/>}/>
    <Route path='/customer/review' element={<Customer/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/booking' element={<Booking/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='*' element={<PageNotFound/>}/>
     </Routes>
    </div>
  );
}

export default App;
