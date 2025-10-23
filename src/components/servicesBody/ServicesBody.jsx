import React from "react";
import { FaStar } from "react-icons/fa6";

const ServicesBody = ({ service }) => {
  const data = service;
  console.log(data);

  return (
    <div className="card bg-base-100 shadow-sm mx-auto rounded-3xl w-full h-100 hover:scale-[1.10]">
      <figure className="px-5 pt-10">
        <img
          src={data.image}
          alt="Shoes"
          className="rounded-xl h-40 w-75"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-[15px]">{data.serviceName}</h2>
        <div className="flex items-center gap-2 text-yellow-500">
            <FaStar />
            <p>{data.rating} M</p>
        </div>
        <p className="font-bold">$ {data.price}</p>
        <div className="card-actions">
        </div>
        <button className="btn btn-primary bg-gradient-to-r from-[#f0913f] to-pink-300 border-0 w-full rounded-4xl">Buy Now</button>
      </div>
    </div>
  );
};

export default ServicesBody;
