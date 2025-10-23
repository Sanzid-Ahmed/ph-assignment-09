import { MdOutlinePets } from "react-icons/md";
import { useLoaderData } from 'react-router';
import ServicesBody from '../servicesBody/ServicesBody';


const PopularServices = () => {

    const allData = useLoaderData();
    console.log(allData);

    allData.sort((a, b) => b.rating - a.rating);
    const top3 = allData.slice(0, 3);

    console.log(top3);


    return (
        <div className='mt-10'>
            <div className='font-bold text-4xl flex justify-center'>
            
            <MdOutlinePets color='#f0913f' />
            <h1 className='pl-5 text-transparent bg-clip-text bg-gradient-to-r from-[#f0913f] to-pink-200'>Popular Winter Care Services</h1>
            </div>

            <div className='grid grid-cols-3 gap-10 mt-5 mx-auto w-11/12'>
                {top3.map(service => <ServicesBody key={service.id} service={service} />)}
            </div>
        </div>
    );
};

export default PopularServices;