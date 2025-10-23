import React from 'react';
import PopularServices from './popularServices/PopularServices';
import Swiper from './Swiper/Swiper';
import WinterCare from './winterCare/WinterCare';
import ExpertVets from './expertVets/ExpertVets';

const Home = () => {

     

    return (
        <div>
            <Swiper></Swiper>
            <PopularServices></PopularServices>
            <WinterCare></WinterCare>
            <ExpertVets></ExpertVets>
        </div>
    );
};

export default Home;