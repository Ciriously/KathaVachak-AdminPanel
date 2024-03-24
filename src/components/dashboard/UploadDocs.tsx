import React from 'react';

const UploadDocs: React.FC = () => {
  return (
    <div className="min-h-44 bg-white flex justify-center rounded-3xl items-center py-18">
      <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="max-w-sm bg-[#EFE9FF] items-center border-2 border-[#865DFF] px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
          >
            <div className="relative">
              <img
                className="w-full h-auto rounded-xl"
                src="https://cdn-icons-png.flaticon.com/256/2956/2956800.png"
                alt="Colors"
              />
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 text-2xl text-black">
                Hello
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadDocs;
