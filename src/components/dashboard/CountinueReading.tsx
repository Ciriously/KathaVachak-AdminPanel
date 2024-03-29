import React from 'react';
import ProgressTracker from './CountinueReading/ProgressTracker'; // Import the ProgressTracker component

const CountinueReading = () => {
  const cardData = [
    {
      id: 1,
      imageUrl:
        'https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      progress: 80,
    },
    {
      id: 2,
      imageUrl:
        'https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      progress: 30,
    },
    {
      id: 3,
      imageUrl:
        'https://images.unsplash.com/photo-1526243741027-444d633d7365?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      progress: 30,
    },
    {
      id: 3,
      imageUrl:
        'https://images.unsplash.com/photo-1526243741027-444d633d7365?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      progress: 30,
    },
    {
      id: 3,
      imageUrl:
        'https://images.unsplash.com/photo-1526243741027-444d633d7365?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      progress: 30,
    },
    {
      id: 3,
      imageUrl:
        'https://images.unsplash.com/photo-1526243741027-444d633d7365?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      progress: 30,
    },
    {
      id: 3,
      imageUrl:
        'https://images.unsplash.com/photo-1526243741027-444d633d7365?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      progress: 30,
    },
  ];
  return (
    <div>
      <>
        {/* component */}
        <div className="flex flex-col rounded-3xl bg-white m-auto p-auto">
          <h1 className="flex py-5 lg:px-4 md:px-10 px-5 lg:mx-4 md:mx-20 mx-5 font-bold text-3xl text-[#2E3271]">
            Continue Reading
          </h1>
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
            <div className="flex flex-nowrap lg:ml-4 md:ml-20 ml-10 ">
              {cardData.map((card) => (
                <div key={card.id} className="inline-block px-2">
                  <div
                    className="w-60 h-48 max-w-md overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out relative"
                    style={{
                      backgroundImage: `url(${card.imageUrl})`,
                      backgroundSize: 'cover',
                    }}
                  >
                    {/* Display ProgressTracker component */}
                    <ProgressTracker
                      title="Progress"
                      progress={card.progress}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n',
          }}
        />
      </>
    </div>
  );
};

export default CountinueReading;
