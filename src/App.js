
import './App.css';
import {Routes ,Route } from 'react-router-dom';
import signInForm from './_auth/forms/signInForm';

function App() {
  return (
    <Routes>
      <Route path='/sign-in' element= {<signInForm />} />
      <Route index element= {<Home />} />

      
    </Routes>
    
  );
}

export default App;
