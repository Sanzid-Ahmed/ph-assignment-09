import React, { use, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, Links, useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { FaEye, FaGoogle } from "react-icons/fa6";
import { IoEyeOff } from "react-icons/io5";

const Register = () => {
  const { createUser, setUser, updateUser, signGoogle } = use(AuthContext);
  const navigate = useNavigate();


  const [show, setShow] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const pass = form.password.value;
    // console.log(name, email, pass);
    if (!/[A-Z]/.test(pass)) {
      toast.error("Password must contain at least one uppercase letter");
    } else if (!/[a-z]/.test(pass)) {
      toast.error("Password must contain at least one lowercase letter");
    } else if (pass.length < 6) {
      toast.error("Password must be at least 6 characters long");
    } else {
      createUser(email, pass)
        .then((res) => {
          const user = res.user;
          updateUser({ displayName: name, photoURL: photo })
            .then(() => {
              setUser({ ...user, displayName: name, photoURL: photo });
              navigate("/");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              alert(errorMessage);
              setUser(user);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    }
  };

  const handleGoogleSignIn = () => {
    signGoogle()
      .then((res) => {
        const user = res.user;
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="flex justify-center min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="font-bold text-2xl text-center mt-7">
            Register your account
          </h1>
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                required
                name="name"
                type="text"
                className="input"
                placeholder="Name"
              />
              <label className="label">Photo URL</label>
              <input
                required
                name="photo"
                type="text"
                className="input"
                placeholder="URL"
              />
              <label className="label">Email</label>
              <input
                required
                name="email"
                type="email"
                className="input"
                placeholder="Email"
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
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-[30px] top-[33px] cursor-pointer z-1"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>

              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="btn btn-outline btn-primary mt-3"
              >
                <FaGoogle /> Login with Google
              </button>
              <ToastContainer />
              <p className="text-center font-bold p-3">
                Have an account?{" "}
                <Link to="/auth/login" className="text-red-500">
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
