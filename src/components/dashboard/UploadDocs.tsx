import React from 'react';

const UploadDocs: React.FC = () => {
  // Define an array of card data with image URLs and corresponding text
  const cardsData = [
    {
      imageUrl: 'https://cdn-icons-png.flaticon.com/256/2956/2956800.png',
      text: 'Card 1 Text',
    },
    {
      imageUrl: 'https://cdn-icons-png.flaticon.com/256/2956/2956800.png',
      text: 'Card 2 Text',
    },
    {
      imageUrl: 'https://cdn-icons-png.flaticon.com/256/2956/2956800.png',
      text: 'Card 3 Text',
    },
  ];

  return (
    <div className="min-h-44 bg-white flex justify-center rounded-3xl items-center py-18">
      <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="max-w-sm bg-[#EFE9FF] items-center border-2 border-[#865DFF] px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
          >
            <div className="relative">
              <img
                className="w-24 h-auto rounded-xl"
                src={card.imageUrl}
                alt={`Card ${index + 1}`}
              />
            </div>
            <span className="block text-center text-2xl text-black mt-4">
              {card.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadDocs;
