import React from "react";
import { useLoaderData } from "react-router";
import ServicesBody from "../servicesBody/ServicesBody";

const ServicesSection = () => {
  const allData = useLoaderData();

  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-5 my-10 mx-auto w-10/12">
        {allData.map((service) => (
          <ServicesBody key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
