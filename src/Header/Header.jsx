import React, { useContext } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import Middle from './Middle/Middle';
import Footer from '../Footer/Footer';
import { AuthContext } from '../Provider/AuthProvider';
const Header = () => {

    const {user,logOut } = useContext(AuthContext)

    const handleLogout = () =>{
        logOut()
        .then( () =>{
    
        })
        .catch( error =>{
            console.log(error)
        })
    }


    return (
        <div >
            <div className='img font-semi-bold text-2xl text-blue-100 text-center py-5'>
                <Link className='mr-5 hover:text-orange-600' to="/">Home</Link>
                <Link className='mr-5 hover:text-orange-600' to="/booking">Booking</Link>
                <Link className='mr-5 hover:text-orange-600' to="/checkout">CheckOut</Link>
                <Link className='mr-5 hover:text-orange-600' to="/login">Login</Link>
                <Link className='mr-5 hover:text-orange-600' to="/registration">Registration</Link>


                {
                user ? <>
                 <span>{user.email}</span>
                 <button onClick={handleLogout} className='btn btn-xs'>Sign-Out</button>
                </> : 
                <Link to="/login">Login</Link>
              }
            </div>
              
        </div>
    );
};

export default Header;