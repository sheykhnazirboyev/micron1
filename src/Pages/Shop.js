import React from 'react';
import TopBar from '../Components/TopBar/TopBar';
import SearchBarV2 from '../Components/SearchBarV2';
import NavbarV2 from '../Components/NavbarV2/';
import RecentlyAdded from '../Components/RecentlyAdded';
import Sponsors from '../Components/Sponsors';
import Products from '../Components/Producsts';
import SignUp from '../Components/SignUp';
import Footer from '../Components/Footer';
import GoToTop from '../Components/GoToTop'
import Breadcrumb from '../Components/Breadcrumb';
import ShopBar from '../Components/Shop';
import ShopCards from '../Components/ShopCards';

function Shop(){
	window.scroll(0,0)
	return(
		<div>
			<TopBar />
			<NavbarV2 />
			<SearchBarV2 />
			<Breadcrumb 
				category = "Shop" 
			/>
			<ShopBar />
			<ShopCards />
			<RecentlyAdded />
			<Sponsors />
			<Products />
			<SignUp />
			<Footer />
            <GoToTop />
        </div>
	)
}
export default Shop;