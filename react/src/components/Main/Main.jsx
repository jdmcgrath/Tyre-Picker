import React from 'react';
import styles from './Main.module.scss';
import CardList from '../CardList';

const Main = (props) => {
	const { tyres, nextPage, prevPage } = props;
	return (
		<>
			<CardList tyres={tyres} nextPage={nextPage} prevPage={prevPage} />
		</>
	);
};

export default Main;
