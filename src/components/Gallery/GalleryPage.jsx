"use client"
import React, { useState } from 'react'
import ImgsViewer from 'react-images-viewer';

const GalleryPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const openImage = (i) =>{
        setCurrentImage(i);
        setIsOpen(true);

    };

    const closeImage = () =>{
        setIsOpen(false);
    };

    const goToPreviousImage = () =>{
        setCurrentImage(currentImage - 1);

    };

    const goToNextImage = () =>{
        setCurrentImage(currentImage + 1);
    };
    


    const images = [
        {
            decs: "Melodies in Motion: Capturing musical passion.", 
            image: "https://i.ibb.co/TkF9bQ8/348388846-222743153893366-175622847980030696-n.jpg"
        }, 
        {
            decs: "Harmonious Rhythms: The beat within.", 
            image: "https://i.ibb.co/7jDWJsn/348387284-996460408380928-4262086079244399837-n.jpg"
        }, 
        {
            decs: "Symphony of Strings: Playing life's chords.", 
            image: "https://i.ibb.co/T8XCMFC/348362266-1959364701072902-1495339754269930506-n.jpg"
        }, 
        
        {
            decs: "The Soundtrack of Life: A melodic journey.", 
            image: "https://i.ibb.co/rpc7J0c/348362441-622473739821784-7716367604557582255-n.jpg"
        }, 
        {
            decs: "Music in Motion: A rhythmic expression.", 
            image: "https://i.ibb.co/Pm6q77q/348968133-1262247571068461-5797773593251399086-n.jpg"
        }, 
        {
            decs: "Captivating Crescendos: Weaving melodies together.", 
            image: "https://i.ibb.co/8MKdqkK/348366936-1281469282578030-1074583270154208153-n.jpg"
        }, 
       
        {
            decs: "Harmonic Reflections: The artist's perspective.", 
            image: "https://i.ibb.co/xs5TNVC/348369031-248366814504862-5217016265069774837-n.jpg"
        }, 
        {
            decs: "Harmonic Unity: Creating musical connections.", 
            image: "https://i.ibb.co/8bjPHDT/348380654-1323500738580157-395495943339938928-n.jpg"
        }, 
        {
            decs: "Musical Journey Unleashed: Expressing through sound.", 
            image: "https://i.ibb.co/gvqRcrh/348378377-217776491106927-293391411137225084-n.jpg"
        }, 
        {
            decs: "Notes and Emotions: Harmonizing souls. ", 
            image: "https://i.ibb.co/tZfP4wr/348378349-813676686542364-611220495702578412-n.jpg"
        }, 
        {
            decs: "The Power of Sound: Channeling creativity.", 
            image: "https://i.ibb.co/ckMh7dQ/348377747-563875169239279-3135545407986053181-n.jpg"
        }, 
    ];

  return (
      <div className=" p-5 ">
                <h2 className="text-center md:text-5xl text-2xl ml-5 md:mt-10 mt-5">Alonzo Johnson</h2>
                <p className=" text-center md:text-2xl text-xl mb-5 md:mb-5">I'm God's child! I'm a sinner fighting the good fight with Love and prayer.</p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4  ">
                    {images?.map((image, i) => (
                       <div key={i} className="card  m-0 border hover:scale-105 transform transition-transform duration-300 cursor-zoom-in">
                       <div className="card-body  p-5 hover:" onClick={() => openImage(i)}>
                         <p className="font-semibold ">{image?.decs}</p>
                         <div className="image-wrapper">
                           <img src={image?.image} className="image-content" alt="Image" />
                         </div>
                       </div>
                     </div>
                     
                    ))}
                   <ImgsViewer
                        imgs={images?.map(image => ({ src: image?.image }))}
                        currImg={currentImage}
                        isOpen={isOpen}
                        onClickPrev={goToPreviousImage}
                        onClickNext={goToNextImage}
                        onClose={closeImage}
                    />


                </div>
      </div>
  )
}

export default GalleryPage
