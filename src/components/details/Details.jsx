import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer/Footer";
import { useLoaderData, useParams } from "react-router";

const Details = () => {


    const data = useLoaderData();
    const {id} = useParams();
    const [details, setDetails] = useState({});

    useEffect(()=>{
        const petDetails = data.find(sdata => sdata.serviceId == id);
        setDetails(petDetails);
    }, [data, id]);

  return (
    <div>
        <header>
            <Header></Header>
        </header>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={details.image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">{details.serviceName}</h1>
            <p className="py-6">
                {details.description}
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Details;
