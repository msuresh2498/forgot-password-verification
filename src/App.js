import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import Forgotpwd from './forgot-pwd';
import UserDetails from './UserDetails';
import PasswordReset from './passwordReset';
import Error from './Error';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Login />} />
        <Route path='*' element={<Error />} />
        <Route path='/forgotpassword' element={<Forgotpwd />} />
        <Route path='/userinfo' element={<UserDetails />} />
        <Route path="/forgotpassword/:id/:token" element={<PasswordReset />} />
      </Routes>
    </div>
  );
}

export default App;
