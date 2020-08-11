import React from 'react';
import Container from '../Container/Container';
import ToggleMenu from '../ToggleMenu';
import SearchBarIcons from '../SearchBarIcons';
import LongInput from '../LongInput';
import "./index.css";

function SearchBarV2(props){
	return(
		<div className = "searchbar-v2-root">
			<Container>
				<div className = "searchbar-v2">
					<ToggleMenu  listHeader = "Shop By Deparment" chevron  noColor = "sasa" yellowBordered />
					<LongInput placeholder = "Search for products ..." rageColor rageInput />
					<SearchBarIcons cost = "$ 175 850" />
				</div>
			</Container>
		</div>
	)
}

export default SearchBarV2;