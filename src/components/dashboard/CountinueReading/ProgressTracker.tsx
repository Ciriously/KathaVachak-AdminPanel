import React from 'react';

import playButtonIcon from '../../../images/Player/Play.svg';

interface ProgressTrackerProps {
  title: string;
  progress: number; // Progress value should be between 0 and 100
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  title,
  progress,
}) => {
  return (
    <div className="max-w-md mx-auto bg-[#EBE4FF] rounded-lg p-4 flex items-center">
      <div className="mr-8">
        <h2 className="text-lg font-semibold text-white mb-2">{title}</h2>
        <div className="relative h-8 bg-white rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <div className="flex items-center">
        <span className="text-red-600 mr-2">{progress}%</span>
        <img src={playButtonIcon} alt="Play" className="w-24 h-24" />
      </div>
    </div>
  );
};

export default ProgressTracker;
