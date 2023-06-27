import { useEffect, useState } from 'react';
import { RxPause } from 'react-icons/rx';
import { FiPlay } from 'react-icons/fi';
import { CgPlayTrackPrev, CgPlayTrackNext } from 'react-icons/cg';

const MusicPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(src);

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isPlaying, src]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center text-5xl ">
     <button> <CgPlayTrackPrev/></button>
      <button onClick={togglePlay}>{isPlaying ? <RxPause className="text-4xl"/> : <FiPlay className="text-4xl"/>}</button>
      <button><CgPlayTrackNext /></button>
    </div>
  );
};

export default MusicPlayer;