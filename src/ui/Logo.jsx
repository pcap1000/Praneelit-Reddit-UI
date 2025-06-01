import { Link } from "react-router-dom";
import styles from "../styles/Logo.module.css";

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <Link to="/">
        <img
          className={styles.logo}
          src="./img/logoimage.png"
          alt="Reddit Logo"
        />
      </Link>
      <Link to="/">
        <img
          className={styles.name}
          src="./img/praneelitorg.png"
          alt="Praneelit Logo"
        />
      </Link>
    </div>
  );
}

export default Logo;
