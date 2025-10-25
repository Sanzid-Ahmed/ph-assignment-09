import React, { use, useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer } from "react-toastify";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaEye, FaGoogle, FaShower } from "react-icons/fa6";
import { IoEyeOff } from "react-icons/io5";

const Login = () => {
  const [error, setError] = useState("");
  const { signInUser, signGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [show, setShow] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;

    signInUser(email, pass)
      .then(() => {
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => setError(error.code));
  };

  const handleGoogle = () => {
    signGoogle()
      .then(() => {
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => setError(error.code));
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
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
            <div className="relative">
              <label className="label">Password</label>
              <input
                name="password"
                type={show ? "text" : "password"}
                className="input"
                placeholder="Password"
                required
              />
              <span onClick={()=> setShow(!show)} className="absolute right-[30px] top-[33px] cursor-pointer z-1">
                {show? <FaEye />:<IoEyeOff/>}
              </span>
            </div>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {error && (
              <p className="text-red-400 font-bold text-center mt-2">{error}</p>
            )}

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>

            <button
              type="button"
              onClick={handleGoogle}
              className="btn btn-outline mt-3 flex items-center justify-center gap-2"
            >
              <FaGoogle /> Login with Google
            </button>

            <ToastContainer />
          </fieldset>
        </form>
        <p className="text-center font-bold p-3">
          Don’t have an account?{" "}
          <Link to="/auth/register" className="text-red-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
