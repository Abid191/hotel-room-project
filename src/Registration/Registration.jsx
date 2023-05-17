import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../Provider/AuthProvider';

const Registration = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegister = (event) =>{
       event.preventDefault()

       const form = event.target
       const name = form.name.value
       const email = form.email.value
       const password = form.password.value
       const confirm = form.confirm.value


       console.log(name,email,password,confirm)
       form.reset()

       createUser(email,password)
       .then(result => {
        const user = result.user
        console.log(user)
       })
       .catch(error =>{
        console.log(error)
       })
       
       if(password !== confirm){
        alert('Your passWord is inCorrect')
       }

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Registration now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-5">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="email" className="input input-bordered required:" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered required:" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='confirm' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Registration</button>
                        </div>
                    </form>
                    <p className='text-center mb-5'><small>Already have account? <br /> please <Link to="/login" className='text-blue-500'>Login</Link></small> </p>
                </div>
            </div>
        </div>
    );
};

export default Registration;