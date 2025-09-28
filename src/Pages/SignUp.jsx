import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../Component/Firebase/firebase';

const SignUp = () => {


    const Navigate = useNavigate()

    const { createUser } = useContext(AuthContext)
    const [nameError, setNameError] = useState("");





    const provider = new GoogleAuthProvider();

    const handleGoggleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(res => {
                console.log(res);
                if (res.user) {
                    toast.success('Signed Up successfully')

                }
                Navigate('/')

            })
            .catch(error => {
                toast.error(error)

            })

    }


    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target;

        const formData = new FormData(form)
        const signUpdata = Object.fromEntries(formData.entries())


        const { name, photo, email, password, } = signUpdata
        console.log(name, email, password);




        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (name.length < 5) {
            toast.error("Name should be more then 5 character");
            return;
        }
        else if (!passwordRegex.test(password)) {
            toast.error(
                "Password must be at least 6 characters one uppercase and one lowercase letter."
            );
            return;
        }

        else {
            setNameError("");
        }





        createUser(email, password)
            .then((res) => {
                console.log(res);

                if (res.user) {
                    toast.success('User Created successfully')

                }
                Navigate('/')


                // Signed up 

                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                if (error.code === 'auth/email-already-in-use') {
                    toast.error("This email is already in use. Please log in or use another email.");
                } else {
                    toast.error(errorMessage);
                }

                // ..
            });



    }


    return (
        <div>
            <Toaster />
            <div className="card border border-gray-200 w-full max-w-sm shrink-0 mx-auto my-20 shadow-2xl">


                <form onSubmit={handleSignUp} className="card-body">
                    <fieldset className="fieldset">


                        <label className="label dark:text-gray-200">Name</label>
                        <div className='dark:text-gray-900'>
                            <input type="text" className="input dark:text-gray-900" name='name' placeholder="Name" />
                        </div>

                        <label className="label dark:text-gray-200">Photo</label>

                        <div className='dark:text-gray-900'>
                            <input type="text" className="input dark:text-gray-900" name='photo' placeholder="Photo Url" />
                        </div>



                        <label className="label dark:text-gray-200">Email</label>

                       <div className='dark:text-gray-900'>
                         <input type="email" className="input dark:text-gray-900" name='email' placeholder="Email" />
                       </div>

                        <label className="label dark:text-gray-200">Password</label>
                        <div className='dark:text-gray-900'>
                            <input type="password" className="input dark:text-gray-900" name='password' placeholder="Password" />
                        </div>
                        



                    
                        <p className='text-gray-200'>already have an account? <Link to="/login"><span className='text-blue-500 underline'>Log in</span></Link> </p>
                        <button type='submit' className="btn btn-neutral mt-4">Sign Up</button>
                    </fieldset>



                    {/* google log in button */}

                    <button onClick={handleGoggleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>


                </form>

            </div>


        </div>
    );
};

export default SignUp;