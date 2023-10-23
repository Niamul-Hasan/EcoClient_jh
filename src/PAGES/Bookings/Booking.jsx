// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';
import Navbar from '../Shared/Navbar';

const Booking = () => {
    const { user } = useContext(AuthContext)
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, isLoading } = useQuery({
        queryKey: ["booking"],
        queryFn: async () => {
            const res = await fetch(`https://eco-server-ecocraftz.vercel.app/products/${id}`);
            const data = await res.json();
            return data;
        }
    });
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleConfirm = (event) => {
        event.preventDefault();
        const form = event.target;
        const bookingData = {
            email: form.email.value,
            product: form.product.value,
            catagory: form.catagory.value,
            quantity: form.quantity.value,
            country: form.country.value.toUpperCase(),
            contact: form.contact.value,
            image: data.image
        };
        fetch('https://eco-server-ecocraftz.vercel.app/bookings', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookingData)
        }).then(res => res.json()).then(data => {
            if (data.acknowledged) {
                alert(`${bookingData.product} is inserted to DB successfully`);
            }
            navigate(`/dashboard/yourBooking/${user?.email}`)

        })
        console.log(bookingData);
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='mt-20 mx-10'>
                <h1 className='text-2xl font-serif font-bold'>Complete Your Booking Details</h1>
            </div>
            <div className="hero min-h-screen bg-base-200 mt-2">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={data.image} alt="" className='rounded-lg shadow-2xl' style={{ height: '400px', width: '450px' }} />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleConfirm} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' value={user?.email} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product</span>
                                </label>
                                <input type="text" name='product' value={data.name} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Catagory</span>
                                </label>
                                <input type="text" name='catagory' value={data.catagory} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="number" name='quantity' placeholder='Name Your Need ' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Country</span>
                                </label>
                                <input type="text" name='country' placeholder='Your Country Name ' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Contact</span>
                                </label>
                                <input type="number" name='contact' placeholder='Give Your Contact Number' className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-sm btn-primary">Confirm</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;