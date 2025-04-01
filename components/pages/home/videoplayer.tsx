"use client";
import React, { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";

export const VideoPopup = ({ videoId }: { videoId: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      {/* Play Button */}
      {/* <button
        onClick={openModal}
        className="bg-blue-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-700"
      >
        Play Video
      </button> */}
      <div
        onClick={openModal}
        className="flex cursor-pointer group gap-2 px-4 py-4 rounded-3xl  mt-8  items-center bg-secondary/10 text-secondary"
      >
        <FaPlayCircle size={32} className=" group-hover:scale-110 group-dow" />
        <p>Global New Herbal Life Documentary</p>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed  inset-0 backdrop-blur-sm bg-black/30 bg-opacity-75 z-50 flex justify-center items-center"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg overflow-hidden relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()} // Prevent clicking inside the modal from closing it
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full"
            >
              X
            </button>

            <div className="relative pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full shadow h-full z-4"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                // frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video player"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ContactUsPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

      {/* Add the Video Popup Component */}
      <div className="text-center mb-8">
        <h3 className="text-xl mb-4">Check out our Intro Video!</h3>
        <VideoPopup videoId="dQw4w9WgXcQ" />
      </div>

      {/* Contact Form or Content Here */}
      <div>
        <p>
          Feel free to reach out to us using the form below or via email, phone,
          or our website.
        </p>
      </div>
    </div>
  );
};

export default ContactUsPage;
