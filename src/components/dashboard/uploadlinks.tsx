import React from 'react';

const UploadLinks: React.FC = () => {
  // Define an array of card data with image URLs and corresponding text
  const cardsData = [
    {
      imageUrl: 'https://cdn-icons-png.flaticon.com/256/2956/2956800.png',
      text: 'Upload Pdf',
    },
    {
      imageUrl: 'https://cdn-icons-png.flaticon.com/256/2956/2956800.png',
      text: 'Upload Image',
    },
    {
      imageUrl: 'https://cdn-icons-png.flaticon.com/256/2956/2956800.png',
      text: 'Upload Link',
    },
  ];

  return (
    <div className="h-[32rem] rounded-3xl bg-white py-12">
      <div className="container mx-auto">
        <h1 className="text-3xl text-[#2E3271] font-poppins px-8 font-bold text-left mb-10">
          Upload documents
        </h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 py-20 gap-10">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="max-w-sm bg-[#EFE9FF] items-center border-2 border-[#865DFF] px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
              >
                <div className="relative">
                  <img
                    className="w-24 h-auto rounded-xl mx-auto"
                    src={card.imageUrl}
                    alt={`Card ${index + 1}`}
                  />
                </div>
                <span className="block text-center font-poppins text-2xl text-black mt-4">
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
