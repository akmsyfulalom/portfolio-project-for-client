import Image from "next/image";
import MusicPlayer from "./MusicPlayer";
import musicThumbnail from "/public/shortAboutImage.jpg"


const Music = () => {
  const audioSrc = '/Azo4lyfe Freestyle.mp3'; // Relative path to the audio file in the public folder

  return (
    <div className="flex justify-center">
      <div className="md:flex justify-center items-center mt-2 ">
        <div className="flex items-center gap-3">
        <Image className="rounded-full" width={100} height={100} src={musicThumbnail} />
        <div>
          <h2 className="text-2xl">Lil Durk - All My Life Ft. J. Cole</h2>
          <p>Azo4lyfe Freestyle</p>
        </div>
        
        </div>
         <span className="md:bg-slate-400 md:m-2 md:py-10 md:px-0.5"></span>
        <div className="flex items-center gap-3">
        <MusicPlayer src={audioSrc} />
        <div>
          <span className="px-20 py-0.5 bg-slate-400"></span>
        </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default Music;
