import "../styles/community-card-post.css"; // Adjust the path as necessary
import { Link } from 'react-router-dom';

const CommunityCardPost = ({ posts = [] }) => {
  return (
    <div className="community-card" >
      <div className="sidebar">
        <div className="sidebar-section">
          <h3 className="sidebar-title">Praneel N Chetty</h3>
          <p className="community-description">
            I'm a B.Tech student at Amrita University, Bengaluru, pursuing a degree in Electronics
            and Computer Engineering (2023-2027). I'm passionate about web development and machine
            learning, and I enjoy building mechanical projects. I'd like to think I'm a fun person too!
          </p>
        </div>
        <hr className="HR"/>
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
        <div className="sidebar-section">
          <h4 className="section-title">RULES</h4>
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
    </div>
  )
}

export default CommunityCardPost;