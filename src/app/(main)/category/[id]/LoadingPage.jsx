import { Spinnaker } from 'next/font/google';
import React from 'react';

const LoadingPage = () => {
    return (
        <div className='flex h-[85vh] items-center justify-center'>
             News By Category Loading...
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    );
};

export default LoadingPage;