import React, { use } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const profile = () => {
const { user } = use(AuthContext);

const m = () =>{
  toast("Sorry Unable to make for final Exam!");
}

  return (
    <div>
      {user ? <div className="min-h-screen flex justify-center items-center">
      <div className="snap-center flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
        <div className="card w-full bg-base-100 shadow-xl border border-gray-100 transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
          <div className="card-body items-center text-center p-6">
            <div className="avatar mb-4">
              <div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                <img
                  src={`${user ? user.photoURL : ""}`}
                  alt="User"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-1">
              {`${user? user.name : ""}`}
            </h3>

            <p className="text-primary text-md mb-4">{`${user? user.email : ""}`}</p>
          </div>
          <button onClick={m} className="btn">Update Profile</button>
          <ToastContainer/>
        </div>
      </div>
    </div> : <h1 className="font-bold text-5xl text-center my-25">Please Login to see profile</h1>}
    </div>
  );
};

export default profile;
