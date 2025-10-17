"use client";
import React, { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ScheduleCallModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState("");

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose} // close when clicking background
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md relative"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-4 text-center">
          Schedule a Call
        </h2>

        {/* Phone input */}
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        {/* Submit button */}
        <button
          className="w-full bg-yellow-400 text-black font-semibold py-2 rounded hover:bg-yellow-500"
          onClick={() => {
            console.log("Phone:", phone);
            onClose();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ScheduleCallModal;
