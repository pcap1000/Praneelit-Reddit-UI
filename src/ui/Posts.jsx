import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Posts.module.css';
import CommunityCardPost from "./community-card-post";
import { useMediaQuery } from 'react-responsive';

const Posts = ({ title, content, username, avatar, postId }) => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 769 });

  return (
    <div className={styles.postsContainer}>
      <div className={styles.post}>
        <div className={styles.postHeader}>
          <div className={styles.userInfo}>
            <img
              src={avatar || "/images/avatar.webp"}
              alt="Profile"
              className={styles.profileImg}
            />
            <span className={styles.username}>{username}</span>
          </div>
          <button className={styles.moreBtn}>•••</button>
        </div>

        <h2 className={styles.title}>{title}</h2>
        <p className={styles.content}>{content}</p>
      </div>
      {isDesktopOrLaptop && <CommunityCardPost />}
    </div>
  );
};

export default Posts;