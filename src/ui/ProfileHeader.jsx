import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/ProfileHeader.module.css';

const ProfileHeader = () => {
  const headerRef = useRef(null);
  const [headerStyle, setHeaderStyle] = useState({
    position: 'relative',
    marginTop: '0',
    zIndex: '100'
  });

  const calculateHeaderPosition = () => {
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    const isMobile = viewportWidth <= 768;

    if (isMobile) {
      // Mobile - fixed header with content padding
      setHeaderStyle({
        position: 'absolute',
        top: '0',
        marginTop: '0',
        zIndex: '100',
        width: '100%',
        background: '#121212',
        top: '6.16vh',
        marginBottom: '-17.82vh',
    });

    // Add padding to the first content element
    const contentElement = document.querySelector('.content-container');
    if (contentElement) {
      const headerHeight = headerRef.current?.offsetHeight || 120;
      contentElement.style.paddingTop = `${headerHeight + 20}px`;
    }
  } else {
    // Desktop - dynamic negative margin based on viewport
    const baseMargin = Math.min(viewportHeight * 0.0005, 200); // Cap at 200px
  setHeaderStyle({
    position: 'relative',
    marginTop: `-${baseMargin}px`,
    zIndex: '100'
  });
}
  };

useEffect(() => {
  calculateHeaderPosition();

  const handleResize = () => {
    requestAnimationFrame(calculateHeaderPosition);
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

return (
  <div
    className={styles.header}
    ref={headerRef}
    style={headerStyle}
  >
    <div className={styles.banner}>
      <img src="./img/praneelitorg.png" alt="Banner" className={styles.bannerLogo} />
    </div>

    <div className={styles.navBar}>
      <div className={styles.leftSection}>
        <div className={styles.logoCircle}>
          <img src="./img/praneelpic.jpeg" alt="Profile" className={styles.logoImage} />
        </div>
        <div className={styles.subredditInfo}>
          <h1 className={styles.subredditName}>r/praneelchetty</h1>
        </div>
      </div>

      <div className={styles.rightSection}>
        <button className={styles.createPostButton}>
          <span className={styles.plusIcon}>+</span>
          Create Post
        </button>
        <button className={styles.joinButton}>Join</button>
        <button className={styles.moreOptionsButton}>
          <span className={styles.dots}>•••</span>
        </button>
      </div>
    </div>
  </div>
);
};

export default ProfileHeader;