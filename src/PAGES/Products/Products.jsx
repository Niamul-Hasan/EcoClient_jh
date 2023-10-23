// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading';
import Navbar from '../Shared/Navbar';
import { useNavigate } from 'react-router-dom';

const Products = () => {



    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    const { data, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await fetch('https://eco-server-ecocraftz.vercel.app/products');
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }



    const handleSelected = (id) => {
        navigate(`/products/${id}`);
    }
    console.log(data);

    return (
        <>
            <Navbar></Navbar>
            <div className='bg-green-100 px-16'>

                <p className='text-4xl font-semibold text-center uppercase mt-16'>Our Products</p>
                <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-2 mt-5 '>
                    {
                        data.map(product => <div
                            key={product._id}
                        >
                            <div className="card lg:w-96 sm:w-full glass shadow-xl">
                                <figure className='mt-3'>
                                    <img src={product.image} alt="car!" className='rounded-xl' /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{product.name.toUpperCase()}</h2>
                                    <p>Catagory:{product.catagory}</p>
                                    <p>{product.description.slice(0, 55)}...</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-sm btn-success"
                                            onClick={() => handleSelected(product._id)}
                                        >Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        )

                    }
                </div>
            </div>
        </>
    );
};

export default Products;