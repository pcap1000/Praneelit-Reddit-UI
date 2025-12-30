import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import styles from '../styles/AppLayout.module.css';
import Header from './Header';
import SideBar from './SideBar';
import CommunityCard from "./community-card";
import '../styles/community-card.css';
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

function AppLayout() {
  const [showMessage1, setShowMessage1] = useState(false);
  const [showMessage2, setShowMessage2] = useState(false);

  const handlePostClick1 = (e) => {
    // Don't trigger if clicking on the link or button
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a')) {
      return;
    }
    setShowMessage1(true);
    setTimeout(() => setShowMessage1(false), 3000);
  };

  const handlePostClick2 = (e) => {
    // Don't trigger if clicking on the link or button
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a')) {
      return;
    }
    setShowMessage2(true);
    setTimeout(() => setShowMessage2(false), 3000);
  };

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.container}>
        <SideBar />
        <div className={styles.content}>
          <CommunityCard>
            {/* Posts Section - Full control with hardcoded content */}
            <div className="posts-section">

              {/* Post 1 - Projects */}
              <div className="post-card" onClick={handlePostClick1} style={{ cursor: 'pointer', position: 'relative' }}>
                {/* Message inside post card */}
                {showMessage1 && (
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(26, 26, 27, 0.95)',
                    color: '#fff',
                    padding: '10px 10px',
                    borderRadius: '8px',
                    fontSize: '2rem',
                    zIndex: 10,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.7)',
                    border: '3px solid #df121c',
                    textAlign: 'center',
                    fontFamily: "Teko"
                  }}>
                    Dawg, all that ain't working
                  </div>
                )}
                <div className="post-header">
                  <div className="post-header-layertwo">
                    <span className="post-author">u/mouthwithnoteeth</span>
                    <br />
                    <span className="post-postname" style={{ color: '#df121c' }}>Projects</span>
                    <span className="post-time"></span>
                  </div>
                  <button className="post-menu">⋯</button>
                </div>
                <h2 className="post-title" style={{}}>
                  Some of my projects include <strong>kanye-Percentage-YE-not-YE</strong>, a machine learning project that analyzes patterns in Kanye West's lyrics; <strong>Carbon-Counter</strong>, a Python tool that calculates and tracks carbon footprint for various activities; and <strong>Last-Mile Delivery Time Slot Optimization</strong>, a system that optimizes delivery routes and assigns time slots for urban deliveries to improve efficiency.
                </h2>

                <div className="post-image-container">
                  <img
                    src="https://miro.medium.com/v2/resize:fit:1400/1*2tsZFK4GIUq1fHX6UpC8xA.jpeg"
                    alt="Post content"
                    className="post-image"
                  />
                </div>
                <h2 className="post-title" style={{ fontSize: '1.6rem', fontFamily: "Teko" }}>
                  <a
                    href="https://github.com/pcap1000?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <FaExternalLinkAlt
                      style={{
                        fontSize: "1.5rem",
                        marginRight: "1%",
                        color: '#df121c',
                        marginBottom: '0.5rem',
                        verticalAlign: "middle"
                      }}
                    />
                    Github, Repositories
                  </a>
                </h2>
              </div>

              {/* Post 2 - About */}
              <div className="post-card" onClick={handlePostClick2} style={{ cursor: 'pointer', position: 'relative' }}>
                {/* Message inside post card */}
                {showMessage2 && (
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(26, 26, 27, 0.95)',
                    color: '#fff',
                    padding: '10px 10px',
                    borderRadius: '8px',
                    fontSize: '2rem',
                    zIndex: 10,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.7)',
                    border: '3px solid #df121c',
                    textAlign: 'center',
                    fontFamily: "Teko"
                  }}>
                    Dawg, all that ain't working
                  </div>
                )}
                <div className="post-header">
                  <div className="post-header-layertwo">
                    <span className="post-author">u/mouthwithnoteeth</span>
                    <br />
                    <span className="post-postname" style={{ color: '#df121c' }}>About ME</span>
                    <span className="post-time"></span>
                  </div>
                  <button className="post-menu">⋯</button>
                </div>

                <h2 className="post-title" style={{}}>
                  I'm a student interested in <strong>AI and Machine Learning</strong>, especially <strong>deep learning and transformer models</strong>. I use <strong>PyTorch</strong> to build and experiment with models like <strong>LSTMs</strong> and <strong>attention-based architectures</strong>. I enjoy working on <strong>hands-on projects</strong>, exploring how models behave, and applying them to <strong>practical problems</strong>. I have experience with <strong>data preprocessing</strong>, <strong>training models</strong>, and <strong>evaluating results</strong>.
                  <br />
                </h2>

                <div className="post-image-container">
                  <img
                    src="https://i.pinimg.com/736x/82/73/c2/8273c22a63cc14739f6062753abd2ef7.jpg"
                    alt="Post content"
                    className="post-image"
                  />
                </div>
                <h2 className="post-title" style={{ fontSize: '1.6rem', fontFamily: "Teko" }}>
                  <IoLocationSharp style={{ fontSize: "2rem", marginRight: "0.7%", color: '#df121c', marginBottom: '-0.5%' }} />Bangalore, India
                  <br />
                </h2>
              </div>
              {/* Add more posts here as needed */}
              {/* 
              <div className="post-card" onClick={handlePostClick} style={{ cursor: 'pointer', position: 'relative' }}>
                <div className="post-header">
                  <div className="post-header-layertwo">
                    <span className="post-author">u/mouthwithnoteeth</span>
                    <br />
                    <span className="post-postname">Post Name</span>
                    <span className="post-time">2h ago</span>
                  </div>
                  <button className="post-menu">⋯</button>
                </div>

                <h2 className="post-title">Your post title here</h2>

                <div className="post-image-container">
                  <img 
                    src="your-image-url" 
                    alt="Post content" 
                    className="post-image"
                  />
                </div>
              </div>
              */}
            </div>
          </CommunityCard>
        </div>
      </main>
    </div>
  );
}

export default AppLayout;