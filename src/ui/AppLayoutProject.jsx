




import { Link, Outlet } from 'react-router-dom';
import styles from '../styles/AppLayout.module.css';
import Header from './Header';
import SideBar from './SideBar';
import CommunityCard from "./community-card"

function AppLayoutProject() {
  const samplePosts = [
    {
      id: "1",
      author: "mouthwithnoteeth",
	  Link:'/project-post-1',
      title: "Optimizing Time-Slotted Deliveries for Post Offices and Courier Companies Managing time-window-based deliveries has always been a challenge for post offices and courier companies",
      image: "https://i.pinimg.com/736x/68/4f/d2/684fd22583e38144212f1cea6b6149db.jpg",
    },

  ]
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.container}>
        <SideBar />
        <div className={styles.content}>
          <CommunityCard posts={samplePosts} />
        </div>
      </main>
    </div>
  );
}

export default AppLayoutProject;
