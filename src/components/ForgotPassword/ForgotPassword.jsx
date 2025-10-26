import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState(location.state?.email || "");
  const { auth } = useContext(AuthContext);

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your email!");

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent!");
        setTimeout(() => {
          window.open("https://mail.google.com", "_blank"); // redirect to Gmail
        }, 1500);
      })
      .catch((error) => toast.error(error.code));
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-5">
        <h2 className="text-2xl font-bold text-center mb-4">
          Reset Your Password
        </h2>
        <form onSubmit={handleReset}>
          <label className="label">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit" className="btn w-full bg-gradient-to-r from-[#f0913f] to-pink-300 rounded-3xl text-white">
            Reset Password
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ForgotPassword;
