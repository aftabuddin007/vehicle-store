import React from 'react';
import Slider from './Slider';
import CategorySlider from './CategorySlider';

const UserDashboard = () => {
    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900  p-6'>
<Slider></Slider>
<CategorySlider></CategorySlider>
        </div>
    );
};

export default UserDashboard;