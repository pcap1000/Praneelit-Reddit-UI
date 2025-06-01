import styles from '../styles/UserPanel.module.css';

function UserPanel() {
  return (
    <div className={styles.userPanel}>
      <img src="https://styles.redditmedia.com/t5_2rn7o/styles/communityIcon_2083me9o3ia21.png" className={styles.profileImage} />
    </div>
  );
}

export default UserPanel;
