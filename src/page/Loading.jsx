import React from 'react';

const Loading = () => {
    return (
        <div className='flex l min-h-screen items-center justify-center text-center'>
           <div>
           <span className="loading loading-spinner loading-lg"></span>
           <h1 className='text-center mt-5 text-2xl font-bold ' > Loading.....</h1>
           </div>
        </div>
    );
};

export default Loading;