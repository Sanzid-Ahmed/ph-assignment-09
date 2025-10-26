import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import { updateProfile } from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");


  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!user) return toast.error("No user found!");

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });
      toast.success("Profile updated successfully!");
      setShowForm(false);
    } catch (error) {
      toast.error("Failed to update profile!");
      console.error(error);
    }
  };

  return (
    <div>
      {user ? (
        <div className="min-h-screen flex justify-center items-center">
          <div className="snap-center flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="card w-full bg-base-100 shadow-xl border border-gray-100 transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="card-body items-center text-center p-6">
                <div className="avatar mb-4">
                  <div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                    <img
                      src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                      alt="User"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {user?.displayName || "No Name"}
                </h3>

                <p className="text-md mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#f0913f] to-pink-500">
                  {user?.email || "No Email"}
                </p>

                {/* Toggle Update Form */}
                {!showForm ? (
                  <button
                    onClick={() => setShowForm(true)}
                    className="btn bg-gradient-to-r from-[#f0913f] to-pink-300 rounded-3xl"
                  >
                    Update Profile
                  </button>
                ) : (
                  <form onSubmit={handleUpdate} className="w-full space-y-3">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter new name"
                      className="input input-bordered w-full"
                      required
                    />
                    <input
                      type="text"
                      value={photoURL}
                      onChange={(e) => setPhotoURL(e.target.value)}
                      placeholder="Enter new photo URL"
                      className="input input-bordered w-full"
                      required
                    />
                    <div className="flex gap-2 justify-center">
                      <button type="submit" className="btn  bg-gradient-to-r from-[#f0913f] to-pink-300 rounded-3xl w-[100px]">
                        Save
                      </button>
                      <button
                        type="button"
                        className="btn bg-gradient-to-r from-[#f0913f] to-pink-300 rounded-3xl w-[100px]"
                        onClick={() => setShowForm(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}
              </div>
              <ToastContainer />
            </div>
          </div>
        </div>
      ) : (
        <h1 className="font-bold text-5xl text-center my-25">
          Please Login to see profile
        </h1>
      )}
    </div>
  );
};

export default Profile;
