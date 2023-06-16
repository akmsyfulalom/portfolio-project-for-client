import React from 'react';
import aboutPageImage from "/public/aboutpageimage.jpg";
import Image from 'next/image';

const About = () => {
  return (
    <div>
     <h1 className="text-4xl text-center lg:mt-20 md:mt-12 mt-6">About</h1>
      <div className="card card-body bg-base-100 z-0 ">
            <figure><Image className="rounded-lg" height={600} width={800}  src={aboutPageImage} alt="AboutPageIamge"/></figure>
        <p className="text-center"><span className="text-2xl">Alonzo Johnson,</span> Detroit, MI, United States, Michigan</p>
        <div className="lg:mx-60">
        <p className="text-2xl mb-1">Introduction:</p>
        <p>Hey there! I'm <span className="text-2xl">Alonzo Johnson,</span> a music enthusiast hailing from the beautiful state of Michigan. Known for my energetic personality and unique style, I bring an unparalleled vibe to every performance. Whether I'm singing my heart out or engaging with the audience, my aim is to create a memorable experience for everyone.
        </p>
        <p className="text-2xl mb-1 mt-4">Favorite Quotes:</p>
        <p>- "Would It Do Shorty." This quote embodies my confidence and swagger, reminding me to always bring my A-game. <br/>
            - "What's Good! U Kno who it is!" When I step on stage, this phrase becomes my mantra, letting the crowd know that it's time to turn up and have a great time. <br/>
            - "Whats Da Deal! Wud up Doe!" These expressions reflect my friendly and approachable nature, inviting people to connect and share positive energy. <br/>
            - "No Way Boi! Yes OK!" These contrasting phrases capture my ability to surprise and delight the audience with unexpected twists and turns during my performances. <br/>
            - "Man Smack Yo Self! Yup! It is what it is!" These words symbolize my authenticity and unapologetic approach to life and music.</p>
        <p className="text-2xl mb-1 mt-4">Experience:</p>
        <p>Throughout my musical journey, I've had the opportunity to perform at various venues and events in Michigan. From electrifying performances at local music festivals to soulful gigs at intimate venues, I've honed my craft and created unforgettable moments for music lovers. I've also collaborated with talented musicians and artists, constantly pushing the boundaries of my creativity.</p>
        <p className="text-2xl mb-1 mt-4">Music Style and Repertoire:</p>
        <p>My singing style is a fusion of contemporary R&B, soul, and hip-hop. I infuse elements of these genres to create a unique and dynamic sound that resonates with listeners. From smooth ballads that tug at the heartstrings to high-energy tracks that get the crowd moving, I bring versatility and passion to every song I perform. My repertoire includes both covers of popular tracks and original compositions, allowing me to showcase my artistry and storytelling abilities.</p>
        <p className="text-2xl mb-1 mt-4">Website:</p>
        <p>Visit my official website to navigate  Activities Menu, explore my Tabs, and access my Spotify, YouTube, Facebook, Tiktok and more. Simply click on the Spotify tab to enjoy my songs and immerse yourself in my musical world.</p>
        <p className="text-2xl mb-1 mt-4">Future Plans and Goals:</p>
        <p>Looking ahead, I am determined to take my music career to new heights. My goal is to release my own EP, sharing my original music with the world. I also aspire to collaborate with renowned artists and producers, further expanding my musical horizons. By continuously honing my skills, experimenting with new sounds, and connecting with a broader audience, I strive to make a lasting impact in the music industry.
         </p>
        <p className="text-2xl mb-1 mt-4">
         I can't wait to share my music and energy with you all. Let's make some unforgettable memories together on this musical journey!</p>
        </div>
      </div>
    </div>
  )
}

export default About
