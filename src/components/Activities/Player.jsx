import React from 'react'
import Facebook from "@/components/Activities/Facebook"

const Player = () => {
  return (
    <div>
      This a test component that displays a player with the  specified name. This component will  automatically      be rendered   when the user clicks on the player   name                            
      <iframe
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Falonzo.m.johnson%2Fvideos%2F991558068692468%2F%3Fref%3Dembed_video&show_text=0&width=267"
            width="267"
            height="476"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    ></iframe>

      <Facebook />
    </div>
    
  )
}

export default Player
