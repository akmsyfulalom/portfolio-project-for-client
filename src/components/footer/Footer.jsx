import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


const Footer = () => {
  const cardContents = [
    {
        id: 1,
        title: "YouTube", 
        img: "https://i.ibb.co/M6rk1BH/youtube-Logo.png", 
        url: "https://www.youtube.com/Azo4LyfeTv"
    }, 
    {
        id: 2,
        title: "Facebook", 
        img: "https://i.ibb.co/bBrmmLF/facebook.png",
        url: "https://www.facebook.com/AzoProduction"
    }, 
    {
        id: 3,
        title: "Spotify", 
        img: "https://i.ibb.co/xhY1zpT/spotify.png",
        url: "https://open.spotify.com/artist/03mKp1bf0Qb4Jq8F4z7xii?si=0NJEHwjVRtOoyxp7UAZufw"
    }, 
    {
        id: 4,
        title: "Tiktok",
        img: "https://i.ibb.co/0D7sCRV/tiktok.png", 
        url: "https://www.tiktok.com/@azothevibe"

    }, 

];
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
    <div className="grid grid-flow-col gap-4">
      <Link href="/about"  className="link link-hover">About</Link> 
      <Link  href="/contact" className="link link-hover">Contact</Link> 
      
    </div> 
    <div>
    <div className="flex  justify-center">
  
  {
          cardContents?.map(cardContent => (
            <Link key={cardContent?.id}  href={cardContent?.url} target='_blank'  className="card">
              <figure className="px-3 ">
                <Image src={cardContent?.img} width={30} height={30} alt="socialIcons"  />
              </figure>
            </Link>
          ))
        }
  </div>
    </div> 
    <div>
      <p>Copyright © 2023 - All right reserved by Alonzo Johnson</p>
    </div>
  </footer>
  )
}

export default Footer
