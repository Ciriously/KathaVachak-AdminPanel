import React from 'react';
import CountinueReading from '../../components/dashboard/CountinueReading';
import DefaultLayout from '../../layout/DefaultLayout';
import AudioPlayer from '../../components/AudioPlayer/audioplayer';
import UploadLinks from '../../components/dashboard/uploadlinks';
import Banner from '../../components/dashboard/Banner';

const ECommerce: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-0">
        {/* Continue Reading component */}
        <div className="md:col-span-2 xl:col-span-4">
          {/* <CountinueReading /> */}
          <Banner />
        </div>
        {/* Upload Links component */}

        <div className="md:col-span-1 xl:col-span-3">
          <UploadLinks />
        </div>
        {/* Audio Player component */}

        <div className="md:col-span-1 xl:col-span-1 ">
          <AudioPlayer />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ECommerce;
