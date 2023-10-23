// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import Navbar from '../Shared/Navbar';
import ReactImageMagnify from 'react-image-magnify';
import './CSS/Selected.css';
import { FaRegHandPointer } from 'react-icons/fa';
import { GoStack } from 'react-icons/go';

const Selected = () => {
    const navigate = useNavigate();
    const [others, setOthers] = useState([]);
    const { id } = useParams();
    const { data, isLoading } = useQuery({
        queryKey: ["product"],
        queryFn: async () => {
            const res = await fetch(`https://eco-server-ecocraftz.vercel.app/products/${id}`);
            const data = await res.json();
            return data;
        }
    });
    const qCatagory = data?.catagory;

    useEffect(() => {
        const url = `https://eco-server-ecocraftz.vercel.app/otherProducts`;
        fetch(url).then(res => res.json()).then(others => {
            const otherData = others.filter(other => other.catagory !== qCatagory);
            setOthers(otherData);
        });
    }, [qCatagory])

    if (isLoading) {
        return <Loading></Loading>
    }


    const handleOther = (catagory) => {
        navigate(`/other/${catagory}`);
    }

    const handleBooking = (id) => {
        navigate(`/booking/${id}`);
    }
    const imgURL = data.image;

    return (
        <div>
            <Navbar></Navbar>

            <div id='topDiv' className='mx-2 grid lg:grid-cols-2 sm:grid-cols-1 sm:overflow-hidden justify-center items-center border shadow-xl'
                style={{ height: '100vh' }}>
                <div id='imgHolder' className="mx-auto" style={{ width: '350px', height: '300px' }}>
                    <ReactImageMagnify className='w-full h-full sm:w-1/2 sm:h-1/2 ' {...{
                        smallImage: {
                            alt: `${data.name}`,
                            isFluidWidth: true,
                            src: imgURL,

                        },
                        largeImage: {
                            src: imgURL,
                            width: 600,
                            height: 800
                        },

                    }} />
                </div>
                <div id='topDivDetails' className='flex flex-wrap justify-end items-center gap-2'>
                    <h1 className='text-5xl font-serif font-bold uppercase me-10'>{data.name}</h1>
                    <p className='text-xl me-5'>{data.description}</p>
                    <div className='flex flex-col gap-2 mt-4 me-10'>
                        <div>
                            <button onClick={() => handleBooking(data._id)}
                                className='btn btn-sm bg-purple-600 hover:bg-teal-600 text-white'>
                                <span><GoStack></GoStack></span>Booking Now
                            </button>
                        </div>
                        <div className='animate-bounce flex flex-col justify-center items-center'>
                            <span className='text-2xl text-green-500'> <FaRegHandPointer></FaRegHandPointer></span>
                        </div>

                    </div>


                </div>

            </div>

            <div id='otherProducts'>
                <div className='text-4xl font-semibold font-serif text-center text-success mx-auto mt-10 border rounded-xl shadow-lg shadow-yellow-200 lg:w-2/5 sm:w-100'>Our Other Products</div>
                <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-2 my-5'>
                    {
                        others.map(other => <div key={other._id} className="card w-96 bg-base-100 shadow-xl">
                            <figure className='transition ease-in-out delay-300 hover:translate-x-4 hover:translate-y-4 hover:scale-125 duration-300 overflow-hidden px-10 pt-10'>
                                <img src={other.image} alt={other.name} className="rounded-xl max-w-50 w-32 h-32"

                                />

                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{other.name}</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button className="btn btn-sm btn-primary" onClick={() => handleOther(other.catagory)}>Explore Now</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>




        </div>
    );
};

export default Selected;