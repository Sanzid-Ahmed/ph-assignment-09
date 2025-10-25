import React from 'react';
import PopularServices from './popularServices/PopularServices';
import Swiper from './Swiper/Swiper';
import WinterCare from './winterCare/WinterCare';
import ExpertVets from './expertVets/ExpertVets';
import PetCareTips from './Extra/QuickLinks';
import QuickLinks from './Extra/QuickLinks';

const Home = () => {

     

    return (
        <div>
            <Swiper></Swiper>
            <PopularServices></PopularServices>
            <WinterCare></WinterCare>
            <ExpertVets></ExpertVets>
            <QuickLinks></QuickLinks>
        </div>
    );
};

export default Home;