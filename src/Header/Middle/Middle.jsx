import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Middle = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='mt-10 flex justify-center'>
            <div className='grid grid-cols-3 gap-10 items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/src/assets/picture/single.jpeg" alt="Shoes" className="rounded-xl w-80 h-52" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Single Bed </h2>
                        <div className='flex justify-between' >
                            <div >
                                <p className='text-blue-600'>Day & night</p>
                                <p>price: $1000</p>
                            </div>
                            <div>
                                <div className="ml-8">
                                    {
                                        user ? <Link to="/booking" className="btn btn-primary">Booking</Link> :
                                        <Link to="/login" className="btn btn-primary">Booking</Link>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/src/assets/picture/double.jpeg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Double Bed</h2>
                        <div className='flex justify-between' >
                            <div >
                                <p className='text-blue-600'>Day & night</p>
                                <p>price: $900</p>
                            </div>
                            <div>
                                <div className="ml-8">
                                    <Link to="/login" className="btn btn-primary">Booking</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/src/assets/picture/nature.jpeg" alt="Shoes" className="rounded-xl " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Ocean Side</h2>

                        <div className='flex justify-between' >
                            <div >
                                <p className='text-blue-600'>Day & night</p>
                                <p>price: $1200</p>
                            </div>
                            <div>
                                <div className="ml-8">
                                    <Link to="/login" className="btn btn-primary">Booking</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Middle;