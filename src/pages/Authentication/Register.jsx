import React, { useContext, useState } from 'react';
import {
  Card,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { Typography } from '@mui/material';
import { Button } from 'flowbite-react';
import { updateProfile } from 'firebase/auth';

const Register = () => {

   const { createUser } = useContext(AuthContext);
   const [error, setError] = useState("");
  


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
          setError("password not valid, Need atleast need 6 char ");
          return;
        }
        if ((name, email, password, photo)) {
          createUser(email, password)
            
            .then((result) => {
              const loggedUser = result.user;
              updateUserData(result.user, name, photo)
              console.log(loggedUser);
              event.target.reset();
            })
            .catch((err) => {
              console.log(err.message);
            });
          
          
        }
  }
  
  const updateUserData = (user, name, photo)=>{
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
      console.log('userNameUpdated');
      })
      .catch(() => {
      setError(error.message)
    })
    }


    return (
      <div className="register text-center mt-8">
        <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Register to Chefie
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto" onSubmit={handleRegister}>
          <div className="mb-4 flex flex-col gap-6">
            <Input type="name" placeholder='Your Name' name="name" required />
            <Input  type="text" placeholder='Photo URL' name="photo" required/>
           <Input  type="email" placeholder='Your Email' name="email" required/>
            <Input type="password" placeholder='Password' name="password" required />
            <Typography color="red" className="mt-4 text-center font-normal">
              {error}
            </Typography>
            
        </div>
          <Button  type='submit'  className='mb-8'>Submit</Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
           
          Already Have An Account?{" "}
          <Link to="/login" className="font-medium text-blue-500 transition-colors hover:text-blue-700">Login Here</Link>
          </Typography>
          
      </form>
    </Card>
      </div>
    );
};

export default Register;