import Controls from './controls';
import ProgressBar from './progressbar';
import SongInfo from './song-info';
import useAudioPlayer from '../MiniPlayer/hooks';
import playlist from '../playlist/playlist';

const AudioPlayer = () => {
  const {
    playNextTrack,
    playPreviousTrack,
    playerState,
    togglePlayPause,
    toggleRepeat,
    toggleShuffle,
    setPlaybackPosition,
  } = useAudioPlayer(playlist);

  const {
    repeat,
    playbackState,
    shuffle,
    currentTrackDuration,
    currentTrackPlaybackPosition,
    currentTrackMetadata,
  } = playerState;

  function setProgress(value: number) {
    if (currentTrackDuration !== null) {
      setPlaybackPosition((value / 100) * currentTrackDuration);
    }
  }

  function computeProgress(): number {
    const noProgress =
      currentTrackDuration === null ||
      currentTrackPlaybackPosition === null ||
      currentTrackDuration === 0;
    if (noProgress) {
      return 0;
    } else {
      return (currentTrackPlaybackPosition / currentTrackDuration) * 100;
    }
  }

  return (
    <div className="bg-white rounded-2xl py-2 w-full mt-[-3.9rem] shadow-md">
      <div className="flex flex-col items-center">
        <SongInfo
          title={currentTrackMetadata?.title}
          artist={currentTrackMetadata?.artist}
          coverArtSrc={currentTrackMetadata?.coverArtSrc}
        />
        <ProgressBar
          rightLabel={formatTime(currentTrackDuration)}
          leftLabel={formatTime(currentTrackPlaybackPosition)}
          onChange={setProgress}
          progress={computeProgress()}
        />
        <Controls
          shuffle={shuffle}
          repeat={repeat}
          onShuffleClick={toggleShuffle}
          onRepeatClick={toggleRepeat}
          onPrevClick={playPreviousTrack}
          onNextClick={playNextTrack}
          onPlayClick={togglePlayPause}
          isPlaying={playbackState === 'PLAYING'}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;

function formatTime(timeInSeconds: number | null): string {
  if (timeInSeconds === null) return '';
  const numberOfMinutes = Math.floor(timeInSeconds / 60);
  const numberOfSeconds = Math.floor(timeInSeconds - numberOfMinutes * 60);
  const minutes = `${numberOfMinutes}`.padStart(2, '0');
  const seconds = `${numberOfSeconds}`.padStart(2, '0');
  return `${minutes}:${seconds}`;
}
