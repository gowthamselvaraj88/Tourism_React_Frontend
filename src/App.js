import Login from './component/Login/Login';
import Register from './component/Register/Register';
import Booking from './component/Bookings/Booking';
import AdminTable from './component/AdminTable/AdminTable'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>

      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/add' element={<Register/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/table' element={<AdminTable/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
