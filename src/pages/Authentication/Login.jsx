import React, { useContext, useState } from 'react';
import {
  Card,
  Input,
  Checkbox,
  Typography,
} from "@material-tailwind/react";
import { Button } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';



const Login = () => {

    const auth = getAuth(app);

   const { user, signIn } = useContext(AuthContext);
    const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  const [DirectUser, setDirectUser] = useState(null);

  const from = location.state?.from?.pathname || '/'

   const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
  }
  
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();


  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const loggedIn = result.user;
        setDirectUser(loggedIn);
        navigate(from, { replace: true })
      })
      .catch(error => {
      setError(error.message)
    })
  }

  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const loggedIn = result.user;
        setDirectUser(loggedIn);
        navigate(from, { replace: true })
      })
      .catch(error => {
        setError(error.message)
        
    })
  }

    return (
      <div className="login text-center mt-8">
         <Card color="transparent" shadow={false} className='mx-auto'>
      <Typography variant="h4" color="blue-gray">
        Sign In
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to Login.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto" onSubmit={handleLogin}>
        <div className="mb-4 flex flex-col gap-6">
          <Input  type="email" placeholder='Your Email' name="email" required/>
            <Input type="password" placeholder='Password' name="password" required />
            <Typography color="red" className="mt-2 text-center font-normal">
              {error}
            </Typography>
        </div>
          
            <Button type='submit' className='mb-8'>Submit</Button>
             
                    <a href="#" className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                        <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                        <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                    </svg>

                    <span onClick={handleGoogleLogin} className="mx-2">Sign in with Google</span>
            </a>
            

             <a href="#" className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>

                    <span onClick={handleGithubLogin}  className="mx-2">Sign in with Github</span>
            </a>
            
            
        <Typography color="gray" className="mt-4 text-center font-normal">
          New to the Chefie?{" "}
          <Link to="/register" className="font-medium text-blue-500 transition-colors hover:text-blue-700">Register Here</Link>
        </Typography>
          </form>
          

               
            
    </Card>
   </div>
    );
};

export default Login;