import React from 'react';
import TopBar from '../Components/TopBar/TopBar';
import SearchBar from '../Components/SearchBar/SearchBar';
import Navbar from '../Components/Navbar/Navbar';
import Banner from '../Components/Banner/Banner';
import SmallAds from '../Components/SmallAds';
import SpecialOffer from "../Components/SpecialOffer";
import MoreTabs from '../Components/MoreTabs';
import BestSellers from '../Components/BestSellers';
import RecentlyAdded from '../Components/RecentlyAdded';
import Sponsors from '../Components/Sponsors';
import Products from '../Components/Producsts';
import SignUp from '../Components/SignUp';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from '../Components/Footer';
import GoToTop from '../Components/GoToTop'
import ResponsiveNavbar from '../Components/ResponsiveNavbar';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
	window.scroll(0,0)
  return (
    <div className = "App">
		<CssBaseline>
			<ResponsiveNavbar />
			<TopBar />
			<SearchBar />
			<Navbar />
			<Banner />
			<SmallAds />
			<SpecialOffer />
			<MoreTabs />
			<BestSellers />
			<RecentlyAdded />
			<Sponsors />
			<Products />
			<SignUp />
			<Footer />
            <GoToTop />
		</CssBaseline>
    </div>
  );
}

export default Home;
