import React from 'react';
import CountinueReading from '../../components/dashboard/CountinueReading';
import DefaultLayout from '../../layout/DefaultLayout';
import AudioPlayer from '../../components/AudioPlayer/audioplayer';
import UploadLinks from '../../components/dashboard/uploadlinks';

const ECommerce: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {/* Continue Reading component */}
        <div className="md:col-span-2 xl:col-span-4">
          <CountinueReading />
        </div>

        {/* Audio Player component */}
        <div className="md:col-span-1 xl:col-span-3">
          <UploadLinks />
        </div>

        {/* Upload Links component */}
        <div className="md:col-span-1 xl:col-span-1">
          <AudioPlayer />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ECommerce;
