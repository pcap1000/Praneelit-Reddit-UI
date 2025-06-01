import { Outlet } from 'react-router-dom';
import styles from '../styles/AppLayout.module.css';
import Header from './Header';
import SideBar from './SideBar';
import CommunityProfile from './CommunityProfile';
import Posts from './Posts'; 

import { Analytics } from "@vercel/analytics/react"

function AppLayout() {
	return (
		<div>
			<Header />
			<Analytics />
			<main className={styles.container}>
				<SideBar />
				{/* <CommunityCard /> */}
				{/* <CommunityProfile/> */}
                {/* <CommunityCardPost /> */}
				<Outlet />
			</main>
		</div>
	);
}

export default AppLayout;
