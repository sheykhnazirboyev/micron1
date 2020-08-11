import {useState} from 'react';
export default initialVal => {
	const [showWindow, setShowWindow] = useState(initialVal);
	const handleChange = (val) => {
		setShowWindow(val);
	}
	return [showWindow, handleChange];
}