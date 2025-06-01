
import { Link, Outlet } from 'react-router-dom';
import styles from '../styles/AppLayout.module.css';
import Header from './Header';
import SideBar from './SideBar';
import CommunityCard from "./community-card"

function AppLayoutAbout() {
  const samplePosts = [


    {
      id: "1",
      author: "mouthwithnoteeth",

	  Link:'/about-post-1',
      title: "I’m from Bangalore, born and raised. Can’t say I love this place, but there are parts of it and the people here that I really do. The chaos, the food, the weirdly unpredictable weather—sometimes annoying, but it has its own charm.",
      image: "https://i.pinimg.com/736x/c0/6f/1d/c06f1d99bb309a6610adf473c16df51a.jpg",

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

export default AppLayoutAbout;




// import { Link, Outlet } from 'react-router-dom';
// import styles from '../styles/AppLayout.module.css';
// import Header from './Header';
// import SideBar from './SideBar';
// import CommunityCard from "./community-card"

// function AppLayoutAbout() {
//   const samplePosts = [
//     {
//       id: "1",
//       author: "angryshoper",
// 	  Link:'/project-post-1',
//       title: "Optimizing Time-Slotted Deliveries for Post Offices and Courier Companies Managing time-window-based deliveries has always been a challenge for post offices and courier companies",
//       image: "https://preview.redd.it/once-upon-a-time-on-tatooine-1920x1080-v0-dyn4018f8s3f1.png?width=1080&crop=smart&auto=webp&s=a1b4dafd72177a0cc9334a417dbaa78534459490",
//     },

//     {
//       id: "3",
//       author: "mambamentality",

// 	  Link:'/about-post-1',
//       title: "I’m from Bangalore, born and raised. Can’t say I love this place, but there are parts of it and the people here that I really do. The chaos, the food, the weirdly unpredictable weather—sometimes annoying, but it has its own charm.",
//       image: "https://preview.redd.it/flow-field-3840-2160-v0-rxd9bw4m1u3f1.png?width=1080&crop=smart&auto=webp&s=8916f91a18ebaff2ef93a45bb34ec9e01a01458b",

//     },
//   ]
//   return (
//     <div className={styles.app}>
//       <Header />
//       <main className={styles.container}>
//         <SideBar />
//         <div className={styles.content}>
//           <CommunityCard posts={samplePosts} />
//         </div>
//       </main>
//     </div>
//   );
// }

// export default AppLayoutAbout;