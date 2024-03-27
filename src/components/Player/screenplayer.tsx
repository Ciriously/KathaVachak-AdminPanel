import playButtonIcon from '../../images/Player/Play.svg';
import pauseButtonIcon from '../../images/Player/Play.svg';
import nextButtonIcon from '../../images/Player/refresh.4 1.svg';
import prevButtonIcon from '../../images/Player/Previous.svg';
import shuffleButtonIcon from '../../images/Player/refresh.4 1.svg';
import nextButton from '../../images/Player/next10.svg';

const ScreenPlayer = () => {
  return (
    <>
      <div className="mt-6 sm:mt-10 relative z-10 rounded-xl shadow-xl">
        <div className="bg-white border-gray-100 border-b rounded-t-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
          <div className="space-y-2">
            <div className="relative">
              <div className="bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="bg-cyan-500 w-1/2 h-2"
                  role="progressbar"
                  aria-label="music progress"
                  aria-valuenow={1456}
                  aria-valuemin={0}
                  aria-valuemax={4550}
                />
              </div>
              <div className="ring-cyan-500 ring-2 absolute left-1/2 top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center bg-white rounded-full shadow">
                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full ring-1 ring-inset ring-gray-500/5"></div>
              </div>
            </div>
            <div className="flex justify-between text-sm leading-6 font-medium tabular-nums">
              <div className="text-cyan-500">24:16</div>
              <div className="text-gray-500">75:50</div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 text-gray-500 rounded-b-xl flex items-center">
          <div className="flex-auto flex items-center justify-evenly">
            <button
              type="button"
              className="hidden sm:block lg:hidden xl:block"
              aria-label="Previous"
            >
              <img src={prevButtonIcon} alt="Previous" />
            </button>
            <button type="button" aria-label="Rewind 10 seconds">
              <img src={shuffleButtonIcon} alt="Shuffle" />
            </button>
          </div>
          <button
            type="button"
            className="text-gray-900 flex-none -my-2 mx-auto w-20 h-20 flex items-center justify-center"
            aria-label="Pause"
          >
            <img src={pauseButtonIcon} alt="Pause" />
          </button>
          <div className="flex-auto flex items-center justify-evenly">
            <button type="button" aria-label="Skip 10 seconds">
              <img src={nextButtonIcon} alt="Next" />
            </button>
            <button
              type="button"
              className="hidden sm:block lg:hidden xl:block"
              aria-label="Next"
            >
              <img src={nextButton} alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenPlayer;
