import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/SocialPost.module.css';
import CommunityCardPost from "./community-card-post"

const SocialPost = ({ title, content, username, avatar, postId }) => {
  return (
    <Link to={`/${postId}`} className={styles.postLink}>
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
    </Link>
  );
};

export default SocialPost;
