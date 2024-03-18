import React from 'react';
import upload from '../../images/upload/upload.svg';
import UploadForm from './UploadForm';

// Header component
const Header = () => {
  return (
    <header className="bg-gray-800 text-[#2E3271] py-4">
      <div className="container mx-auto">
        <h1 className="text-2xl mt-4 text-center font-bold">
          Upload Book Of Your Choice
        </h1>
      </div>
    </header>
  );
};

// UploadBook component
const UploadBook = () => {
  return (
    <div>
      {/* Include the Header component */}
      <div className="bg-white rounded-3xl">
        <Header />

        <div className="flex justify-center items-center h-full">
          <div className="w-1/2 p-8">
            {/* Left side with image */}
            <img src={upload} alt="Your Image" className="w-full h-auto" />
          </div>
          <div className="w-1/2 p-44">
            {/* Right side with upload document form */}
            <UploadForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadBook;
