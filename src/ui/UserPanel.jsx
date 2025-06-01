import styles from '../styles/UserPanel.module.css';

function UserPanel() {
  return (
    <div className={styles.userPanel}>
      <img src="./img/Dragron.png" className={styles.profileImage} />
    </div>
  );
}

export default UserPanel;
