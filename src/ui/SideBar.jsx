import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/SideBar.module.css";
import {
  FaUserAlt,
  FaProjectDiagram,
  FaPenNib,
  FaBars,
  FaMusic
} from "react-icons/fa";

const API_KEY = import.meta.env.VITE_LASTFM_API_KEY;
const USER = import.meta.env.VITE_LASTFM_USER;



function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [lastTrack, setLastTrack] = useState(null);

  const sidebarRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Fetch last played song from Last.fm
  useEffect(() => {
    async function fetchLastPlayed() {
      try {
        const res = await fetch(
          `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USER}&api_key=${API_KEY}&limit=1&format=json`
        );
        const data = await res.json();

        const track = data.recenttracks.track[0];
        setLastTrack(track);
      } catch (err) {
        console.error("Last.fm fetch error:", err);
      }
    }

    fetchLastPlayed();
  }, []);

  // Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        !e.target.closest(`.${styles.menuToggle}`)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <button className={styles.menuToggle} onClick={toggleMenu}>
        <FaBars size={20} />
      </button>

      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)} />
      )}

      <div
        ref={sidebarRef}
        className={`${styles.sideBar} ${isOpen ? styles.open : ""}`}
      >
        {/* Navigation */}
        <nav className={styles.navMenu}>
          <ul>
            <li>
              <Link
                to="/"
                className={`${styles.navItem} ${location.pathname === "/" ? styles.active : ""
                  }`}
                onClick={() => setIsOpen(false)}
              >
                <FaUserAlt className={styles.icon} />
                All
              </Link>
            </li>

            <li>
              <Link
                to="/About"
                className={`${styles.navItem} ${location.pathname === "/About" ? styles.active : ""
                  }`}
                onClick={() => setIsOpen(false)}
              >
                <FaPenNib className={styles.icon} />
                About
              </Link>
            </li>

            <li>
              <Link
                to="/project"
                className={`${styles.navItem} ${location.pathname === "/project" ? styles.active : ""
                  }`}
                onClick={() => setIsOpen(false)}
              >
                <FaProjectDiagram className={styles.icon} />
                Project
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.horizontalLine}></div>

        {/* Last Played Song */}
        <div className={styles.lastPlayed}>
          <h4 className={styles.lastPlayedTitle}>
            {/* <FaMusic />  */}
            Last Played
          </h4>

          {lastTrack ? (
            <div className={styles.trackCard}>
              <img
                src={lastTrack.image[2]["#text"]}
                alt="Album Art"
                className={styles.songCover}
              />

              <div className={styles.songDetails}>
                <h3 className={styles.musicname}>
                  {lastTrack.name.length > 17 ? lastTrack.name.slice(0, 17) + "…" : lastTrack.name}
                </h3>
                <b><p className={styles.artistname}>
                  {lastTrack.artist["#text"].length > 15
                    ? lastTrack.artist["#text"].slice(0, 15) + "…"
                    : lastTrack.artist["#text"]}
                </p></b>
              </div>


            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <div className={styles.horizontalLine}></div>

        <button className={styles.resumeButton}>Resume</button>
      </div>
    </>
  );
}

export default SideBar;
