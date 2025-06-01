import { Link, Outlet } from 'react-router-dom';
import styles from '../styles/AppLayout.module.css';
import Header from './Header';
import SideBar from './SideBar';
import CommunityCard from "./community-card"

function AppLayout() {
  const samplePosts = [
    {
      id: "1",
      author: "mouthwithnoteeth",
	  Link:'/project-post-1',
      title: "Project - Optimizing Time-Slotted Deliveries for Post Offices and Courier Companies Managing time-window-based deliveries has always been a challenge for post offices and courier companies",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*2tsZFK4GIUq1fHX6UpC8xA.jpeg",
      // image: "https://preview.redd.it/once-upon-a-time-on-tatooine-1920x1080-v0-dyn4018f8s3f1.png?width=1080&crop=smart&auto=webp&s=a1b4dafd72177a0cc9334a417dbaa78534459490",
    },

    {
      id: "2",
      author: "mouthwithnoteeth",

	  Link:'/about-post-1',
      title: "I’m from Bangalore, born and raised. Can’t say I love this place, but there are parts of it and the people here that I really do. The chaos, the food, the weirdly unpredictable weather—sometimes annoying, but it has its own charm.",
      image: "https://i.pinimg.com/736x/82/73/c2/8273c22a63cc14739f6062753abd2ef7.jpg",

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

export default AppLayout;