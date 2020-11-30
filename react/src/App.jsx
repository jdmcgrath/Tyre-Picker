import React, { useEffect, useState } from 'react';
import './App.module.scss';
import NavBar from './components/NavBar';
import Main from './components/Main';

function App() {
	const [tyres, setTyres] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [size, setSize] = useState('');
	const [page, setPage] = useState(1);

	// Upon searchbox changing its criteria, set Search term to value input by user
	const handleChange = (input) => {
		if (input.target.value) {
			setSearchTerm(input.target.value);
			fetchTyres();
		} else {
			setSearchTerm('');
			fetchTyres();
		}
	};

	// Fetch the tyres from the NodeAPI which should be running locally at port 3000
	const fetchTyres = () => {
		fetch(`http://localhost:8080/tyres?name=${searchTerm}&size=${size}&page=${page}&limit=3`)
			.then((response) => response.json())
			.then((data) => setTyres(data.results))
			.catch((error) => console.log(error));
	};

	const nextPage = () => {
		setPage(page + 1);
		fetchTyres();
	};

	const prevPage = () => {
		if (page > 1) {
			setPage(page - 1);
			fetchTyres();
		}
	};

	const sizeSelect = (input) => {
		setSize(input.target.value);
		fetchTyres();
	};

	// On component (page) load, fetch the tyres & also reload when page, searchTerm, or size change
	// This is not ideal as the component COULD be rerendered before we get a response from the API, a better way to do it may be to add fetchedTyres to an array, and useEffect on
	useEffect(() => fetchTyres(), []);

	return (
		<>
			<NavBar handleChange={handleChange} sizeSelect={sizeSelect} nextPage={nextPage} prevPage={prevPage} />
			<Main tyres={tyres}/>
		</>
	);
}

export default App;
