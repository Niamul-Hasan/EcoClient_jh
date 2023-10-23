import { useParams, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { useQuery } from '@tanstack/react-query';
import { getAuth } from 'firebase/auth';
import app from '../../Firebase/firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from '../NewPages/Hooks/UseAdmin';
import bg from '../../assets/2.jpg';
import { useState } from 'react';


const BookingDetails = () => {
    const [isShiped, setIsShiped] = useState(false);
    const navigate = useNavigate();
    const auth = getAuth(app);
    const [user] = useAuthState(auth);
    const email = user?.email;
    const [admin] = useAdmin(user);
    const { id } = useParams();
    const { data, isLoading } = useQuery({
        queryKey: ["BookingDetails"],
        queryFn: async () => {
            const res = await fetch(`https://eco-server-ecocraftz.vercel.app/details/${id}`);
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }
    const handleEdit = (id) => {
        navigate(`/dashboard/editBooking/${id}`)
    }


    const handleDelete = id => {
        const procced = confirm(`Do you want to delete ${data.product} !!`);
        if (procced) {
            fetch(`https://eco-server-ecocraftz.vercel.app/deleteBooking/${id}`, {
                method: 'DELETE',
                headers: {
                    "authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            }).then(res => res.json())
                .then(deleted => {
                    if (deleted.deletedCount) { admin ? navigate(`/dashboard/userBooking`) : navigate(`/dashboard/yourBooking/${email}`) }
                })
        }
        else {
            setIsShiped(false);
        }
    }

    const handleBack = () => {
        { admin ? navigate(`/dashboard/userBooking`) : navigate(`/dashboard/yourBooking/${email}`) }
    }
    const saturation = 25;
    const blurAmount = 50;
    const brightness = 5;
    const opacity = 0.65;
    return (
        <div className="hero min-h-screen bg-gray-200">
            <img src={bg} alt="BG" className="h-full bg-base-200 w-full"
                style={{
                    WebkitFilter: `brightness(${brightness}%) saturation(${saturation}%) blur(${blurAmount}px)`,
                    filter: `brightness(${brightness}%) saturation(${saturation}%) blur(${blurAmount}px)`,
                    opacity: opacity
                }}
            />
            <div className="hero-content flex-col lg:flex-row-reverse lg:glass">
                <img src={data?.image} alt="Product image" className="lg:max-w-lg rounded-lg shadow-2xl" />
                <div>
                    <p className='text-2xl font-thin'>Product ID:{data._id}</p>
                    <p className='uppercase font-serif text-xl'>{data.product}</p>
                    <p>Catagory: <span className='font-semi-bold text-xl'>{data.catagory}</span></p>
                    <p>Customer Email: <span className='font-serif text-sm text-blue-700'>{data.email}</span></p>
                    <p>Booking From: <span className='font-serif text-sm text-green-800'>{data.country}</span></p>

                    <p className='text-lg'>Contact: <span className='text-xl text-gray-900'>
                        {data.contact}</span></p>

                    <p className='text-2xl'>Quantity: <span className='font-bold text-lg'>{data.quantity}</span></p>





                    <div>
                        {admin ? <div className='mt-6'>
                            {isShiped ? <button onClick={() => handleDelete(data._id)} className='btn btn-sm btn-error'>Delete</button> : <button onClick={() => setIsShiped(true)} className='btn btn-sm btn-success'>Send to trash</button>}
                        </div>
                            : <div className='mt-6'>
                                <button onClick={() => handleEdit(data._id)} className='btn btn-sm btn-warning'>Edit</button>
                            </div>}
                    </div>
                    <button onClick={handleBack} className='btn btn-sm bg-teal-400 border-teal-400 mt-2 font-bold'>Back</button>
                </div>
            </div>
        </div>
    );
};

export default BookingDetails;