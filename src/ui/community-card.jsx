import React, { useState, useEffect } from 'react';
import "../styles/community-card.css";

const CommunityCard = ({ children }) => {
  const [activeView, setActiveView] = useState('feed');
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1003);
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
            <img 
              src="https://i.pinimg.com/236x/b2/f1/01/b2f101003bd626231e5ef7fd210705c2.jpg" 
              alt="Praneel pic" 
              className="logo" 
            />
          </div>
          <h1 className="community-name">
            <strong><b>r/praneelchetty</b></strong>
          </h1>
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
        {/* Children (Posts Section) - Show on large screens or when Feed is active on small screens */}
        {(isLargeScreen || activeView === 'feed') && children}

        {/* Fixed Sidebar - Show on large screens or when About is active on small screens */}
        {(isLargeScreen || activeView === 'about') && (
          <div className="sidebar">
            {/* Community Info */}
            <div className="sidebar-section">
              <h3 className="sidebar-title">PRANEEL N CHETTY</h3>
              <p className="community-description">
                I'm a B.Tech student at Amrita University, Bengaluru, pursuing a degree in Electronics
                and Computer Engineering (2023-2027). I'm passionate about web development and machine
                learning, and I enjoy building mechanical projects. I'd like to think I'm a fun person too!
              </p>
            </div>
            <hr className="HR" />
            {/* Community Bookmarks */}
            <div className="sidebar-section">
              <h4 className="sidebar-title-lower">COMMUNITY BOOKMARKS</h4>
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
            <hr className="HR" />
            {/* Rules */}
            <div className="sidebar-section">
              <h4 className="sidebar-title-lower">RULES</h4>
              <div className="rules-list">
                <div className="rule-item">
                  <span className="rule-number">1</span>
                  <span className="rule-text">Build, Break, Repeat</span>
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
  );
};

export default CommunityCard;