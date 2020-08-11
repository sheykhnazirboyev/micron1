import React , {useState} from 'react';
import Container from "../Container/Container";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import "./index.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Shop(props){
	const classes = useStyles();
	const [sort, setSort] = useState('default');
	const [show, setShow] = useState(20)

	const handleSort = (event) => {
		setSort(event.target.value);
	};

	const handleShow = (event) => {
		setShow(event.target.value);
	}

	return(
		<div>
			<Container>
				<div className = "shop">
					
				</div>
				<div className = "shop-bar">
					<div>
						<h2>Shop</h2>
						<i className = "fa fa-list"></i>
					</div>
					<div>
						<FormControl variant="outlined" className={classes.formControl}>
					        <Select
					          labelId="demo-simple-select-outlined-label"
					          id="demo-simple-select-outlined"
					          value={sort}
					          onChange={handleSort}
					          label="Sort"
					        >
					          <MenuItem value={"default"}>Default sorting</MenuItem>
					          <MenuItem value={"popularity"}>Sort by popilarity</MenuItem>
					          <MenuItem value={"average"}>Sort by average rating</MenuItem>
					          <MenuItem value={"latest"}>Sort by rating</MenuItem>
					          <MenuItem value={"lowHight"}>Sort by low to hight</MenuItem>
					          <MenuItem value={"hightLow"}>Sort by hight to low</MenuItem>
					        </Select>
				      	</FormControl>
				      	<FormControl variant="outlined" className={classes.formControl}>
					        <Select
					          labelId="demo-simple-select-outlined-label"
					          id="demo-simple-select-outlined"
					          value={show}
					          onChange={handleShow}
					          label="Sort"
					        >
					          <MenuItem value={20}>Show 20</MenuItem>
					          <MenuItem value={30}>Show 30 </MenuItem>
					          <MenuItem value={100}>Show All</MenuItem>
					        </Select>
				      	</FormControl>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Shop;