import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer/Footer";
import { useLoaderData, useParams } from "react-router";
import { ToastContainer, toast } from 'react-toastify';


const Details = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [details, setDetails] = useState({});


  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    // console.log(email, name);
    toast.success("successfully booked services!");
  };


  useEffect(() => {
    const petDetails = data.find((sdata) => sdata.serviceId == id);
    setDetails(petDetails);
  }, [data, id]);

  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={details.image} className="w-[600px] h-[600px] rounded-lg shadow-2xl" />
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">{details.serviceName}</h1>
            <p className="py-6">{details.description}</p>
            <form onSubmit={handleLogin} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input w-full"
                  placeholder="Email"
                  required
                />
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input w-full"
                  placeholder="Your name "
                  required
                />
                <button type="submit" className="btn btn-neutral mt-4">
                  Book Now
                </button>
                <ToastContainer />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Details;
