




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
      title: "Project - Optimizing Time-Slotted Deliveries for Post Offices and Courier Companies Managing time-window-based deliveries has always been a challenge for post offices and courier companies",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*2tsZFK4GIUq1fHX6UpC8xA.jpeg",
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
