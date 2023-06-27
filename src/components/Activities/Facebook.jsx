import React, { useRef, useState } from 'react';

const FacebookPosts = () => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const videoRefs = useRef([]);

  const handleVideoPlay = (videoId) => {
    setCurrentVideo(videoId);
    pauseOtherVideos(videoId);
  };

  const pauseOtherVideos = (currentVideoId) => {
    videoRefs.current.forEach((videoRef, index) => {
      if (videoRef && videoRef.current && index !== currentVideoId) {
        videoRef.current.pause();
      }
    });
  };

  const facebookPosts = [

    {
      id: 1,
      postLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Falonzo.m.johnson%2Fvideos%2F219970527569048%2F%3Fref%3Dembed_video&show_text=0&width=267"
      
    },
    {
      id: 2,
      postLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Falonzo.m.johnson%2Fvideos%2F991558068692468%2F%3Fref%3Dembed_video&show_text=0&width=267"
      
    },
    {
      id: 3,
      postLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Falonzo.m.johnson%2Fvideos%2F267053395842475%2F%3Fref%3Dembed_video&show_text=0&width=560"
      
    },
    {
      id: 4,
      postLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Falonzo.m.johnson%2Fvideos%2F604138024576132%2F%3Fref%3Dembed_video&show_text=0&width=560"
      
    },
    {
      id: 5,
      postLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Falonzo.m.johnson%2Fvideos%2F927515355085627%2F%3Fref%3Dembed_video&show_text=0&width=560"
      
    },
    {
      id: 5,
      postLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Falonzo.m.johnson%2Fvideos%2F691719419316432%2F%3Fref%3Dembed_video&show_text=0&width=560"
      
    }
  ];

  return (
    <div>
      {facebookPosts.map((post) => (
        <div key={post.id}>
          <button onClick={() => handleVideoPlay(post.id)}>Play Video</button>
          {currentVideo === post.id && (
            <iframe
              src={post.postLink}
              width="560"
              height="315"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen="true"
              ref={(ref) => (videoRefs.current[post.id] = ref)}
            ></iframe>
          )}
        </div>
      ))}
    </div>
  );
};

export default FacebookPosts;





// import { useState, useEffect } from 'react';

// const FacebookPosts = () => {
//   const [posts, setPosts] = useState([]);
//   console.log(posts)
//   const accessToken = async () => {
//     try {
//       const response = await fetch("https://graph.facebook.com/v13.0/oauth/access_token?client_id=982082919468048&client_secret=05e00a5eb9cedf2ab2d248003e642202&grant_type=client_credentials");
      
//       if (response.ok) {
//         const data = await response.json();
//         return data.access_token;
//       } else {
//         console.error('Failed to obtain access token');
//         return null;
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       return null;
//     }
//   };
  

 
  

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = await accessToken();
//         console.log(token)
//         if (!token) {
//           console.error('Access token is not available');
//           return;
//         }
        
//         const response = await fetch(
//           `https://graph.facebook.com/100018838652466/posts?access_token=${token}&limit=10`
//         );
//         console.log(response)
        
//         if (response.ok) {
//           const data = await response.json();
//           console.log(data)
//           setPosts(data.data);
//         } else {
//           console.error('Failed to fetch Facebook posts');
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>Latest Facebook Posts {posts?.length}</h2>
//       {posts.map((post) => (
//         <div key={post.id}>
//           <p>{post.message}</p>
//           {/* Add any additional rendering logic for post data */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FacebookPosts;


