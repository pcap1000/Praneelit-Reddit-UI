import styles from '../styles/UserPanel.module.css';

function UserPanel() {
  return (
    <div className={styles.userPanel}>
      <img src="https://i.redd.it/6mz5s8nskzna1.jpg" className={styles.profileImage} />
    </div>
  );
}

export default UserPanel;
