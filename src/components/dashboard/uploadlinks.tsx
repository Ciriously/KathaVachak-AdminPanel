import React from 'react';

import pdf from '../../images/sidebar/upload pdf.svg';
import link from '../../images/sidebar/upload link.svg';
import image from '../../images/sidebar/upload image.svg';

const UploadLinks: React.FC = () => {
  // Define an array of card data with image URLs and corresponding text
  const cardsData = [
    {
      imageUrl: pdf,
      text: 'Upload Pdf',
    },
    {
      imageUrl: image,
      text: 'Upload Image',
    },
    {
      imageUrl: link,
      text: 'Upload Link',
    },
  ];

  return (
    <div className="h-[31.29rem] mt-[-2.5rem] rounded-3xl bg-white w-[95%] py-2 px-12">
      <div className="container mx-auto">
        <h1 className="text-3xl text-[#2E3271] font-poppins py-2 mt-4 font-medium text-left mb-10">
          Upload documents
        </h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 py-20 gap-10">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="max-w-sm bg-[#EFE9FF] items-center border-2 border-[#865DFF] px-14 py-12 rounded-3xl shadow-lg transform hover:scale-105 transition duration-500"
              >
                <div className="relative">
                  <img
                    className="w-15 h-auto rounded-lg mx-auto"
                    src={card.imageUrl}
                    alt={`Card ${index + 1}`}
                  />
                </div>
                <span className="block text-center font-poppins text-xl text-black mt-4">
                  {card.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadLinks;
