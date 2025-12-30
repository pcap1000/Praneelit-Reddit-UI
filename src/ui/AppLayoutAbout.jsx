import { Link, Outlet } from 'react-router-dom';
import styles from '../styles/AppLayout.module.css';
import Header from './Header';
import SideBar from './SideBar';
import CommunityCard from "./community-card";
import '../styles/community-card.css';
import { IoLocationSharp } from "react-icons/io5";

function AppLayoutAbout() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.container}>
        <SideBar />
        <div className={styles.content}>
          <CommunityCard>
            {/* Posts Section - Full control with hardcoded content */}
            <div className="posts-section">
              {/* Post 1 */}
              {/* <a href="#" className="post-link"> */}
              <div className="post-card">
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
                  I’m a student interested in <strong>AI and Machine Learning</strong>, especially <strong>deep learning and transformer models</strong>. I use <strong>PyTorch</strong> to build and experiment with models like <strong>LSTMs</strong> and <strong>attention-based architectures</strong>. I enjoy working on <strong>hands-on projects</strong>, exploring how models behave, and applying them to <strong>practical problems</strong>. I have experience with <strong>data preprocessing</strong>, <strong>training models</strong>, and <strong>evaluating results</strong>.
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
              {/* </a> */}

              {/* Add more posts here as needed */}
              {/* 
              <a href="#" className="post-link">
                <div className="post-card">
                  <div className="post-header">
                    <div className="post-header-layertwo">
                      <span className="post-author">u/username</span>
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
              </a>
              */}
            </div>
          </CommunityCard>
        </div>
      </main>
    </div>
  );
}

export default AppLayoutAbout;