type SongInfoProps = {
  title?: string;
  artist?: string;
  coverArtSrc?: string;
};

const SongInfo = ({ title, artist, coverArtSrc }: SongInfoProps) => {
  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <img
        className="drop-shadow-lg rounded-xl mb-10"
        width={280}
        height={180}
        src={coverArtSrc}
      />
      <span className="text-2xl  drop-shadow-lg text-[#000]">{title}</span>
      <span className="text-base drop-shadow-lg text-[gray]">{artist}</span>
    </div>
  );
};

export default SongInfo;
