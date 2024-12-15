import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const CallbackModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Trigger Button */}
      <button
        onClick={toggleModal}
        className="bg-yellow-500 text-white py-2 px-4 rounded-md shadow-md"
      >
        Open Callback Modal
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-96 rounded-lg shadow-lg relative p-5">
            {/* Close Icon */}
            <button
              onClick={toggleModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <CloseIcon />
            </button>

            {/* Header */}
            <h2 className="text-lg font-semibold text-center">
              Request for a callback
            </h2>
            <p className="text-sm text-center text-gray-600 mt-1">
              Our team will contact you shortly to solve your queries and find
              the key to your health.
            </p>

            {/* Input Fields */}
            <form className="space-y-4 mt-5">
              <div className="flex items-center bg-gray-200 rounded-lg px-3 py-2">
                <PersonIcon className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Name"
                  className="flex-1 bg-transparent outline-none px-2 text-sm"
                />
              </div>
              <div className="flex items-center bg-gray-200 rounded-lg px-3 py-2">
                <EmailIcon className="text-gray-500" />
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 bg-transparent outline-none px-2 text-sm"
                />
              </div>
              <div className="flex items-center bg-gray-200 rounded-lg px-3 py-2">
                <PhoneIcon className="text-gray-500" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="flex-1 bg-transparent outline-none px-2 text-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-full shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CallbackModal;
