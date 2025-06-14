import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/SideBar.module.css";
import { FaUserAlt, FaProjectDiagram, FaPenNib, FaBars, FaPlay, FaPause } from "react-icons/fa";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);
  const sidebarRef = useRef(null); // Reference for the sidebar container
  const location = useLocation(); // Get current route

  const toggleMenu = () => setIsOpen(!isOpen);
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const { currentTime, duration } = audioRef.current;
    setProgress((currentTime / duration) * 100);
  };

  const handleProgressChange = (e) => {
    const manualChange = Number(e.target.value);
    audioRef.current.currentTime = (manualChange / 100) * audioRef.current.duration;
    setProgress(manualChange);
  };

  // Effect to handle clicking outside the sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if sidebar is open and click is outside both sidebar and menu toggle button
      if (isOpen && 
          sidebarRef.current && 
          !sidebarRef.current.contains(event.target) &&
          !event.target.closest(`.${styles.menuToggle}`)) {
        setIsOpen(false);
      }
    };

    // Add event listener when sidebar is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, styles.menuToggle]);

  return (
    <>
      <audio 
        ref={audioRef} 
        src="./img/Warriors.mp3"
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />

      <button className={styles.menuToggle} onClick={toggleMenu}>
        <FaBars size={20}  />
      </button>

      {/* Dim overlay - appears when sidebar is open */}
      {isOpen && (
        <div 
          className={styles.overlay} 
          onClick={() => setIsOpen(false)}
        />
      )}

      <div 
        ref={sidebarRef}
        className={`${styles.sideBar} ${isOpen ? styles.open : ''}`}
      >
        <nav className={styles.navMenu}>
          <ul>
            <li>
              <Link 
                to="/" 
                className={`${styles.navItem} ${location.pathname === "/" ? styles.active : ""}`} 
                onClick={() => setIsOpen(false)}
              >
                <FaUserAlt className={styles.icon} />
                All
              </Link>
            </li>
            <li>
              <Link 
                to="/About" 
                className={`${styles.navItem} ${location.pathname === "/About" ? styles.active : ""}`} 
                onClick={() => setIsOpen(false)}
              >
                <FaPenNib className={styles.icon} />
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/project" 
                className={`${styles.navItem} ${location.pathname === "/project" ? styles.active : ""}`} 
                onClick={() => setIsOpen(false)}
              >
                <FaProjectDiagram className={styles.icon} />
                Project
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.horizontalLine}></div>

        <div className={styles.musicPlayer}>
          <img
            src="https://i.pinimg.com/736x/55/b0/d0/55b0d00ce6424469876d62fc4bec4881.jpg"
            alt="Enemy Song Cover"
            className={styles.songCover}
          />
          <div className={styles.songDetails}>
            <h3>Warriors</h3>
            <p>Imagine Dragons</p>
          </div>
          <div className={styles.progressBar}>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={progress} 
              className={styles.slider} 
              onChange={handleProgressChange}
            />
          </div>
          <div className={styles.controls}>
            <button className={styles.playButton} onClick={togglePlay}>
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
          </div>
        </div>

        <div className={styles.horizontalLine}></div>

        <button className={styles.resumeButton}>Resume</button>
      </div>
    </>
  );
}

export default SideBar;