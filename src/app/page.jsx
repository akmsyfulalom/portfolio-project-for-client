// "use client"
// import { useSpring, animated } from 'react-spring';
// import HeroSection from '@/components/header/HeroSection';
// import ShortAbout from '@/components/homePageComponents/ShortAbout';
// import YoutubeSection from '@/components/homePageComponents/YoutubeSection';

// export default function Home() {
//   const heroSectionAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });
//   const shortAboutAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1000 });
//   const youtubeSectionAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1500 });

//   return (
//     <div>
//       <animated.div style={heroSectionAnimation}>
//         <HeroSection />
//       </animated.div>

//       <animated.div style={shortAboutAnimation}>
//         <ShortAbout />
//       </animated.div>

//       <animated.div style={youtubeSectionAnimation}>
//         <YoutubeSection />
//       </animated.div>
//     </div>
//   );
// }

import Hero from '@/components/header/Hero'
import ShortAbout from '@/components/homePageComponents/ShortAbout'
import YoutubeSection from '@/components/homePageComponents/YoutubeSection'


export default function Home() {
  return (
  <div>
    
     <Hero/>
     <ShortAbout/>
     <YoutubeSection/>
    
  </div>
  )
}

