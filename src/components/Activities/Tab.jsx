"use client"
import { useState } from 'react';
import FacebookPosts from './Facebook';


const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Facebook');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-5">
      
      {activeTab === 'Facebook' &&  <FacebookPosts />}
      {activeTab === 'YouTube' && <p>YouTube content goes here</p>}
      {activeTab === 'Spotify' && <p>Spotify content goes here</p>}
      {activeTab === 'TikTok' && <p>TikTok content goes here</p>}

      <div className="flex justify-center gap-5 mb-5 tabs tabs-boxed">
        <button
          className={`tab-btn   ${activeTab === 'Facebook' ? 'active' : ''}`}
          onClick={() => handleTabChange('Facebook')}
        >
          Facebook
        </button>
        <button
          className={`tab-btn ${activeTab === 'YouTube' ? 'active' : ''}`}
          onClick={() => handleTabChange('YouTube')}
        >
          YouTube
        </button>
        <button
          className={`tab-btn ${activeTab === 'Spotify' ? 'active' : ''}`}
          onClick={() => handleTabChange('Spotify')}
        >
          Spotify
        </button>
        <button
          className={`tab-btn ${activeTab === 'TikTok' ? 'active' : ''}`}
          onClick={() => handleTabChange('TikTok')}
        >
          TikTok
        </button>
      </div>

      {activeTab === 'Facebook' && <p>Facebook content goes here</p>}
      {activeTab === 'YouTube' && <p>YouTube content goes here</p>}
      {activeTab === 'Spotify' && <p>Spotify content goes here</p>}
      {activeTab === 'TikTok' && <p>TikTok content goes here</p>}
    </div>
  );
};

export default Tabs;
