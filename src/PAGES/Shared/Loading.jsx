// eslint-disable-next-line no-unused-vars
import React from 'react';
import caktus from "../../assets/caktus.gif";

const Loading = () => {
    return (
        <div>
            <div>
                <h3 className='text-center mt-2 text-lg font-mono text-blue-900'>Loading ...</h3>
                <img src={caktus} alt="" className='mx-auto' style={{ width: '300px', height: '300px' }} />

            </div>


        </div>
    );
};

export default Loading;