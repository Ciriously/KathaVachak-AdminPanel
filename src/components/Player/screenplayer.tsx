import React from 'react';

import Playbtn from '../../images/Player/Play.svg';
import Translate from '../../images/Player/footer/Translate.svg';
import Chapter from '../../images/Player/footer/Paper.svg';
import Speed from '../../images/Player/footer/time.svg';
import Download from '../../images/Player/footer/Download.svg';

const Player = () => {
  return (
    <>
      <div className="mt-2 w-2/3 bg-[#F3EFFF] sm:mt-1 relative z-10 rounded-xl ">
        <div className="transition-all duration-500 rounded-t-xl p-2 pb-8 sm:p-6 sm:pb-6 lg:p- lg:pb-6 xl:p-6 xl:pb-6 space-y-4 sm:space-y-6 lg:space-y-4 xl:space-y-6">
          <div className="space-y-1">
            <div className="relative">
              <div className="bg-white transition-all duration-500 rounded-full overflow-hidden">
                <div
                  className="bg-[#E90064] transition-all duration-500 w-2/4 h-2"
                  role="progressbar"
                  aria-label="music progress"
                  aria-valuenow={1456}
                  aria-valuemin={0}
                  aria-valuemax={4550}
                />
              </div>
              <div className="ring-[#E90064] transition-all duration-500 ring-2 absolute left-1/2 top-1/2 w-3 h-3 -mt-1.5 -ml-1.5 flex items-center justify-center bg-[#E90064] rounded-full shadow">
                <div className="w-1.5 h-1.5 bg-[#E90064] transition-all duration-500 rounded-full "></div>
              </div>
            </div>
            <div className="flex justify-between text-xs leading-5 font-medium tabular-nums">
              <div className="text-slate-500 transition-all duration-500">
                24:16
              </div>
              <div className="text-slate-500 transition-all duration-500">
                75:50
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F3EFFF]  text-slate-500 transition-all duration-500 flex items-center">
          <div className="flex-auto flex items-center mb-4 justify-evenly">
            <button
              type="button"
              className="hidden sm:block lg:hidden xl:block"
              aria-label="Previous"
            >
              <svg width={20} height={20} fill="none">
                <path
                  d="m10 12 8-6v12l-8-6Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6v12"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button type="button" aria-label="Rewind 10 seconds">
              <svg width={20} height={20} fill="none">
                <path
                  d="M6.492 16.95c2.861 2.733 7.5 2.733 10.362 0 2.861-2.734 2.861-7.166 0-9.9-2.862-2.733-7.501-2.733-10.362 0A7.096 7.096 0 0 0 5.5 8.226"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 5v3.111c0 .491.398.889.889.889H9"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <button type="button" aria-label="Pause/Play">
            <img src={Playbtn} alt="Play" className="h-36" />
          </button>
          <div className="flex-auto mb-4  flex items-center justify-evenly">
            <button type="button" aria-label="Skip 10 seconds" className="">
              <svg width={20} height={20} fill="none">
                <path
                  d="M17.509 16.95c-2.862 2.733-7.501 2.733-10.363 0-2.861-2.734-2.861-7.166 0-9.9 2.862-2.733 7.501-2.733 10.363 0 .38.365.711.759.991 1.176"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 5v3.111c0 .491-.398.889-.889.889H15"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              className="hidden sm:block lg:hidden xl:block"
              aria-label="Next"
            >
              <svg width={20} height={20} fill="none">
                <path
                  d="M14 12 6 6v12l8-6Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 6v12"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex px-16 mb-1 justify-between flex-wrap">
          <div className="flex items-center flex-col">
            <img src={Translate} alt="Podcast" className="mx-auto" />
            <p className="text-[#2E2E5D] text-center mt-1">Translate</p>
          </div>

          <div className="flex items-center flex-col mt-2 md:mt-0">
            <img src={Chapter} alt="Chapter" className="mx-auto" />
            <p className="text-[#2E2E5D] text-center mt-1">Chapter 2</p>
          </div>

          <div className="flex items-center flex-col mt-2 md:mt-0">
            <img src={Speed} alt="Speed" className="mx-auto" />
            <p className="text-[#2E2E5D] text-center mt-1">Timer 20x</p>
          </div>

          <div className="flex items-center flex-col mt-2 md:mt-0">
            <img src={Download} alt="Download" className="mx-auto" />
            <p className="text-[#2E2E5D] text-center mt-1">Download</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
