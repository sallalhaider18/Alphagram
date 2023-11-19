
import './App.css';
import {Routes ,Route } from 'react-router-dom';
import SignInForm from './_auth/Forms/SignInForm';
import SignUpForm from './_auth/Forms/SignUpForm';
import Home from './_root/Pages/Home';


function App() {
  return (
    <Routes>

      { /* PUBLIC ROOTS */ }
         <Route index element= {<SignInForm />} />
         <Route path='/sign-up' element= {<SignUpForm />} />

      { /* PRIVATE ROOTS */ }
         <Route path='/home' element= {<Home />} />
      
    </Routes>
    
  );
}

export default App;
