import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import toast from "daisyui/components/toast";
import { ToastContainer } from "react-toastify";

const Login = () => {
    const [error, setError] = useState("");
  const { signInUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    console.log(email, pass);
    signInUser(email, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        navigate(`${location.state ? location.state :"/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="font-bold text-2xl text-center mt-7">
          Login your account
        </h1>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {error && <p className="text-red-400 font-bold text center">{error}</p>}

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <ToastContainer/>
          </fieldset>
        </form>
        <p className="text-center font-bold p-3">
          Don't have an account? <Link to="/auth/register" className="text-red-500">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
