import React from 'react';
import banner from './banner.svg';

const Banner: React.FC = () => {
  return (
    <div className="bg-white px-8 w-full py-8 rounded-2xl h-4/5 overflow-hidden shadow-lg flex justify-center items-center">
      <img
        className="object-cover rounded-3xl max-w-[94rem] max-h-full w-full"
        src={banner}
        alt="Banner Image"
      />
    </div>
  );
};

export default Banner;
