import React, {useState} from 'react';
import Container from '../Container/Container';
import Logo from '../Logo';
import SearchBarIcons from '../SearchBarIcons';
import LongInput from '../LongInput';
import "./SearchBar.css";

function SearchBar()
{
	

	return(
		<div className = "searchBar-row"> 
			<Container>
				<div className = "searchBar">
					<Logo  />
					<LongInput placeholder = "Search for products ..."  />
					<SearchBarIcons cost = "$ 175 850" />
				</div>
			</Container>
			
		</div>
	)
}

export default SearchBar;