
import './App.css';
import {Routes ,Route } from 'react-router-dom';
import SignInForm from './_auth/Forms/SignInForm';
import SignUpForm from './_auth/Forms/SignUpForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import Home from './_root/Pages/Home';


function App() {
  return (
    <Routes>

      { /* PUBLIC ROOTS */ }
      <Route element = {<AuthLayout />}>
         <Route path='/sign-in' element= {<SignInForm />} />
         <Route path='/sign-up' element= {<SignUpForm />} />
      </Route>

      { /* PRIVATE ROOTS */ }
      <Route element = {<RootLayout />}> 
         <Route index element= {<Home />} />
      </Route>
      
    </Routes>
    
  );
}

export default App;
