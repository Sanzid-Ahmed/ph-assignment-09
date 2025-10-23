import React from "react";

const Register = () => {
  return (
    <div>
      <div className="flex justify-center min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="font-bold text-2xl text-center mt-7">
            Register your account
          </h1>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input type="text" className="input" placeholder="Name" />
              <label className="label">Photo URL</label>
              <input type="text" className="input" placeholder="URL" />
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
