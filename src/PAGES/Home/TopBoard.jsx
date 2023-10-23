// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { SiMinutemailer } from 'react-icons/si';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { FcClock } from 'react-icons/fc';

const TopBoard = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);


    return (
        <div className="text-4xl font-bold bg-gradient-to-r from-teal-900 to-zinc-800 flex flex-col lg:flex-row justify-center lg:justify-between px-5 items-center lg:fixed lg:top-0 w-full mx-auto z-10">
            <div>
                <div className='text-xl font-mono text-black flex flex-row justify-center items-center gap-2'>
                    <h1><FcClock></FcClock></h1>
                    <p className='font-thin text-warning'>{time.toLocaleTimeString()}</p>
                </div>
            </div>
            <div>
                <div className='text-lg font-serif text-white flex flex-row justify-start items-center gap-2'>
                    <h1><SiMinutemailer></SiMinutemailer></h1>
                    <h1>ecocraftzbd@gmail.com</h1>
                </div>
                <div className='text-lg font-serif text-white flex flex-row justify-start items-center gap-2'>
                    <h1><BiSolidPhoneCall></BiSolidPhoneCall></h1>
                    <h1>01111111111</h1>
                </div>
            </div>

        </div>
    );
};

export default TopBoard;