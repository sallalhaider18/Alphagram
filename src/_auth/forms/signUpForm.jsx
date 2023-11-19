import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import Loader from '../../shared/Loader';

export default function SignUpForm (){
  const isLoading = false;


  const divStyle = {
    background: 'black',
  };

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const [firstname, setFirstName] = useState('');
 const [lastname, setLastName] = useState('');


 async function handleSubmit(e){
  e.preventDefault();

try {
  await axios.post("http://localhost:8000/signup",{
    email,password
  })
} catch (error) {
  console.log(error);
}

    // Perform your authentication logic here
    // For demonstration purposes, just showing an error if email or password is empty
   // if (!email || !password) {
     // setError('Please enter both email and password.');
     // return;
   // }

    // Clear error if no issues
   // setError('');
    // Your authentication logic goes here
   // console.log('Authentication successful!');
  };

    return(
<div>
<div class="gradient-form" style={divStyle}>
  <div class="container mt-3">

    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-xl-10">

        <div class="card rounded-3 text-black bg-dark">
        <h1 className='text-light text-center'><i>ALPHAGRAM</i></h1>

          <div class="row g-0">
            <div class="col-lg-12">
              <div class="card-body p-md-5">

                <form  onSubmit={handleSubmit}>
                  <p className='text-light'>Please login to your account</p>


                  <div class="mb-4">
                    <input type="text" id="form2Example18" class="form-control"
                      placeholder="First Name"  value={firstname}
                      onChange={(e) => setFirstName(e.target.value)}
                      required />
                    <label class="form-label text-light" for="form2Example18">First Name</label>
                  </div>

                  <div class="mb-4">
                    <input type="text" id="form2Example19" class="form-control"
                      placeholder="Last Name"  value={lastname}
                      onChange={(e) => setLastName(e.target.value)}
                      required />
                    <label class="form-label text-light" for="form2Example19">Last Name</label>
                  </div>

                  <div class="mb-4">
                    <input type="email" id="form2Example11" class="form-control"
                      placeholder="Phone number or email address"  value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required />
                    <label class="form-label text-light" for="form2Example11">Username</label>
                  </div>

                  <div class="mb-4">
                    <input type="password" id="form2Example22" class="form-control" placeholder='Enter Password'  value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required />
                    <label class="form-label text-light" for="form2Example22">Password</label>
                  </div>

                  <div class="text-center pt-1 mb-5 pb-1">
                    <button class="btn btn-danger btn-block fa-lg gradient-custom-2 mb-3" type="submit">
                    {
                        isLoading ? (
                          <Loader />
                        ) :
                        (
                          <div className='flex-center'>
                          Sign In
                          </div>
                        )
                    
                      }

                    </button>
                  </div>

                  <div class="d-flex align-items-center justify-content-center pb-4">
                    <p class="mb-0 me-2 text-light">I already have an account..</p>
                    <Link to='/' class="btn btn-outline-danger">Sign In</Link>
                  </div>

                </form>

              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
</div>
    );
}