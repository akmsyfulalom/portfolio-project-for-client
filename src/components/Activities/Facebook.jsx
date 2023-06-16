import { useState, useEffect } from 'react';

const FacebookPosts = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts)
  const accessToken = async () => {
    try {
      const response = await fetch("https://graph.facebook.com/v13.0/oauth/access_token?client_id=982082919468048&client_secret=05e00a5eb9cedf2ab2d248003e642202&grant_type=client_credentials");
      
      if (response.ok) {
        const data = await response.json();
        return data.access_token;
      } else {
        console.error('Failed to obtain access token');
        return null;
      }
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };
  

 
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await accessToken();
        console.log(token)
        if (!token) {
          console.error('Access token is not available');
          return;
        }
        
        const response = await fetch(
          `https://graph.facebook.com/100018838652466/posts?access_token=${token}&limit=10`
        );
        console.log(response)
        
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setPosts(data.data);
        } else {
          console.error('Failed to fetch Facebook posts');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Latest Facebook Posts {posts?.length}</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.message}</p>
          {/* Add any additional rendering logic for post data */}
        </div>
      ))}
    </div>
  );
};

export default FacebookPosts;


