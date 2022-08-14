import './App.css';
import Dashboard from './Components/Inside/Dashboard';
import Login from './Components/Outside/Login';
import SignUp from './Components/Outside/SignUp';
import Reset from './Components/Outside/Reset';
import Campuses from './Components/Outside/Campuses';
import { Routes, Route } from 'react-router-dom';
import Suggest from './Components/Outside/Suggest';

function App() {
 

  return (
  <>
 <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/signin' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/reset' element={<Reset/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/campus' element={<Campuses/>}/>
      <Route path='/new-suggestion' element={<Suggest/> }/>
    </Routes>

  </>   
  );
}

export default App;
