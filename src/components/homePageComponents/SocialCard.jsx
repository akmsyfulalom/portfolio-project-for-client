import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const SocialCard = () => {

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
<div className="lg:flex hidden my-20 gap-10 justify-center">
  
{
        cardContents?.map(cardContent => (
          <Link key={cardContent?.id}  href={cardContent?.url} target='_blank'  className="card  bg-base-100 border border-neutral-200 rounded-full">
            <figure className="p-5">
              <Image src={cardContent?.img} width={100} height={100} alt="socialIcons" className="rounded-xl" />
            </figure>
          </Link>
        ))
      }
</div>
  )
}

export default SocialCard
