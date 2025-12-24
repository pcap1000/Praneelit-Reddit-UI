import React, { useState, useEffect } from 'react';
import "../styles/community-card.css";

const CommunityCard = ({ posts = [] }) => {
  const [activeView, setActiveView] = useState('feed'); // 'feed' or 'about'
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // 1024px and above for laptop+
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  return (
    <div className="community-card" style={{ borderRadius: '0' }}>
      {/* Fixed Header */}
      <div className="header">
        <div className="banner-container">
          <img 
            src="https://styles.redditmedia.com/t5_2rn7o/styles/bannerBackgroundImage_k2h8abnl1ia21.png?width=2176&frame=1&auto=webp&s=3254d1b8d9fe42d940ea7d4fa7f728138416e05f"  
            alt="Community banner" 
            className="banner-image"
          />
        </div>
        <div className="header-content">
          <div className="logo-container">
            <img src="./img/praneelpic.jpeg" alt="Praneel pic" className="logo" />
          </div>
          <h1 className="community-name">r/praneelchetty</h1>
          <div className="header-actions">
            {!isLargeScreen && (
              <>
                <button 
                  className={`create-post-btn ${activeView === 'feed' ? 'active' : ''}`}
                  onClick={() => handleViewChange('feed')}
                >
                  Feed
                </button>
                <button 
                  className={`join-btn ${activeView === 'about' ? 'active' : ''}`}
                  onClick={() => handleViewChange('about')}
                >
                  Info
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="main-content">
        {/* Dynamic Posts Section - Show on large screens or when Feed is active on small screens */}
        {(isLargeScreen || activeView === 'feed') && (
          <div className="posts-section">
            {posts.length > 0 ? (
              posts.map((post) => (
                <a 
                  key={post.id} 
                  href={post.Link} 
                  className="post-link"
                >
                  <div className="post-card">
                    <div className="post-header">
                      <div className="post-header-layertwo">
                      <span className="post-author">u/{post.author}</span>
                      <br />
                      <span className="post-postname">{post.postname}</span>
                      <span className="post-time">{post.timeAgo}</span>
                      </div>
                      <button className="post-menu">⋯</button>
                    </div>

                    <h2 className="post-title">{post.title}</h2>

                    {post.image && (
                      <div className="post-image-container">
                        <img src={post.image || "/placeholder.svg"} alt="Post content" className="post-image" />
                      </div>
                    )}
                  </div>
                </a>
              ))
            ) : (
              <div className="no-posts">
                <p>No posts available. Be the first to post!</p>
              </div>
            )}
          </div>
        )}

        {/* Fixed Sidebar - Show on large screens or when About is active on small screens */}
        {(isLargeScreen || activeView === 'about') && (
          <div className="sidebar">
            {/* Community Info */}
            <div className="sidebar-section">
              <h3 className="sidebar-title">Praneel N Chetty</h3>
              <p className="community-description">
                I'm a B.Tech student at Amrita University, Bengaluru, pursuing a degree in Electronics
                and Computer Engineering (2023-2027). I'm passionate about web development and machine
                learning, and I enjoy building mechanical projects. I'd like to think I'm a fun person too!
              </p>
            </div>
            <hr className="HR"/>
            {/* Community Bookmarks */}
            <div className="sidebar-section">
              <h4 className="section-title">COMMUNITY BOOKMARKS</h4>
              <button 
                className="bookmark-btn"
                onClick={() => window.open("https://github.com/pcap1000", "_blank", "noopener,noreferrer")}
              >
                Github
              </button>
              <button 
                className="bookmark-btn"
                onClick={() => window.open("https://www.instagram.com/praneel_010/", "_blank", "noopener,noreferrer")}
              >
                Instagram
              </button>
            </div>
            <hr className="HR"/>
            {/* Rules */}
            <div className="sidebar-section">
              <h4 className="section-title">RULES</h4>
              <div className="rules-list">
                <div className="rule-item">
                  <span className="rule-number">1</span>
                  <span className="rule-text">
                     Build, Break, Repeat
                  </span>
                </div>
                <div className="rule-item">
                  <span className="rule-number">2</span>
                  <span className="rule-text">If You Can't Sell It, Don't Build It</span>
                </div>
                <div className="rule-item">
                  <span className="rule-number">3</span>
                  <span className="rule-text">Mechanical Minds Welcome</span>
                </div>
                <div className="rule-item">
                  <span className="rule-number">4</span>
                  <span className="rule-text">Keep Learning, Keep Building</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CommunityCard;