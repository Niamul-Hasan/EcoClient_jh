// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import bg from '../../assets/logo_prevew.png';
import { GiBed } from 'react-icons/gi';
import { GiFlowerPot } from 'react-icons/gi';
import { GiTowel } from 'react-icons/gi';
import { GiGymBag } from 'react-icons/gi';
import { GiWaves } from 'react-icons/gi';

const Catagory = () => {
    const navigate = useNavigate();
    const handleClick = catagory => {
        navigate(`/other/${catagory}`)
    }
    return (
        <div className="hero max-h-screen" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-overlay bg-opacity-60">
                <div className="hero-content flex-col lg:hidden mx-4 mt-10">
                    <div onClick={() => handleClick("chandor")}
                        className='p-4 bg-orange-500 w-1/2 cursor-pointer uppercase flex flex-row justify-start items-center gap-2'>
                        <div className='text-4xl'><GiBed></GiBed></div>
                        <div>chandor</div>
                    </div>

                    <div onClick={() => handleClick("pot")}
                        className='bg-red-500 w-1/2 mx-auto text-center p-4 cursor-pointer uppercase flex flex-row justify-start items-center gap-2'>
                        <div className='text-4xl'><GiFlowerPot /></div>
                        <div>pot</div>
                    </div>

                    <div onClick={() => handleClick("sataronji")}
                        className='bg-green-500 w-1/2 mx-auto text-center p-4 cursor-pointer uppercase flex flex-row justify-start items-center gap-2'>
                        <div className='text-4xl'><GiTowel /></div>
                        <div>sataronji</div>
                    </div>

                    <div onClick={() => handleClick("ladies bag")}
                        className='bg-blue-500 w-1/2 mx-auto text-center p-4 cursor-pointer uppercase flex flex-row justify-start items-center gap-2'>
                        <div className='text-4xl'><GiGymBag /></div>
                        <div>ladies bag</div>
                    </div>

                    <div onClick={() => handleClick("papose")}
                        className='bg-amber-500 w-1/2 mx-auto text-center p-4 cursor-pointer uppercase flex flex-row justify-start items-center gap-2'>
                        <div className='text-4xl'><GiWaves /></div>
                        <div>papose</div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Catagory;