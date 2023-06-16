'use client'
import React, { useState } from 'react';

const YoutubeSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [isModalClicked, setModalClicked] = useState(false);


  const handleVideoLoad = () => {
    setLoading(false)
    setTimeout(() => {
      setLoading(false); // Set isLoading to false after the delay
    }, 1000);
  };

  const openModal = () => {
  setIsModalOpen(true);
  setModalClicked(true);
  setLoading(false);
};


  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="bg-fixed relative h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/3122799/pexels-photo-3122799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          
          
      }}
    >
      {/* Icon */}
      <button onClick={openModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-10 h-10 md:w-16 md:h-16 text-white"
        >
          <circle cx="12" cy="12" r="10" />
          <polygon points="10 8 16 12 10 16 10 8" />
        </svg>
      </button>
      <p className="py-6 md:py-12 text-center text-white text-xl md:text-5xl">Alonzo Johnson - Play my latest song now 2023</p>

      {/* Modal */}
      {isModalOpen && (
        <div className={`fixed inset-0 flex items-center justify-center z-50 ${
          isModalClicked ? "bg-back animate-bg" : "" }`}>
          <div className="fixed inset-0 bg-black opacity-75"></div>
          <div className="fixed p-4 md:w-full max-w-lg">
            <button
              onClick={closeModal}
              className="md:mb-4 mb-2 md:px-4 px-2 py-2 bg-gray-800 text-white rounded-md"
            >
              Close
            </button>

            {isLoading ? (
              <div className="flex items-center justify-center h-64 bg-gray-200">
                <p>Loading...</p>
              </div>
            ) : (
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/eKoOCPW5XXU"
                title="Play my latest song now 2023"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={handleVideoLoad}
              ></iframe>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default YoutubeSection;