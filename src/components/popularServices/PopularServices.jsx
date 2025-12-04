import { MdOutlinePets } from "react-icons/md";
import { useLoaderData } from 'react-router';
import ServicesBody from '../servicesBody/ServicesBody';

const PopularServices = () => {
  const allData = useLoaderData();

  allData.sort((a, b) => b.rating - a.rating);
  const top3 = allData.slice(0, 5);

  return (
    <section className="mx-auto my-16 w-11/12 lg:w-10/12">

      <div className="flex items-center justify-center mb-12">
        <MdOutlinePets className="text-pink-600 text-2xl md:text-3xl lg:text-4xl" />
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-pink-600">
          Popular Winter Care Services
        </h2>
      </div>


      <div className="flex lg:grid lg:grid-cols-5 
        overflow-x-auto lg:overflow-visible 
        snap-x snap-mandatory lg:snap-none 
        gap-4 pb-4 -mx-4 md:mx-0"
      >

        {top3.map((service) => (
          <div
            key={service.id}
            className="
              snap-center lg:snap-none 
              flex-none lg:flex-auto 
              w-[80%] sm:w-[60%] md:w-[40%] lg:w-auto 
              p-4
            "
          >
            <div className="w-full bg-base-100 shadow-xl border border-gray-100 rounded-xl transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl">
              <ServicesBody service={service} />
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default PopularServices;
