import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Favorite = () => {
    const data= useLoaderData();

    const {_id,poster,title,genre,duration,year,rating,email,summary}=data
    return (
        <div>
            this is favorite page{_id}
        </div>
    );
};

export default Favorite;