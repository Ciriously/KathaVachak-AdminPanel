import React from 'react';
import CardDataStats from '../../components/CardDataStats';
import CountinueReading from '../../components/dashboard/CountinueReading';
import Player from '../../components/Player/screenplayer';
import DefaultLayout from '../../layout/DefaultLayout';
import AudioPlayer from '../../components/AudioPlayer/audioplayer';
import UploadLinks from '../../components/dashboard/uploadlinks';

const ECommerce: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <div className="hidden md:block col-span-1"></div>{' '}
        {/* Placeholder for space */}
        <div className="md:col-span-1 xl:col-span-2 2xl:col-span-3">
          <UploadLinks />

          <CountinueReading />
          <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
            <div className="col-span-12 xl:col-span-8"></div>
            {/* <ChatCard /> */}
          </div>
          {/* <Player /> */}
        </div>
        <div className="md:col-span-1 xl:col-span-1 2xl:col-span-1">
          <AudioPlayer />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ECommerce;
