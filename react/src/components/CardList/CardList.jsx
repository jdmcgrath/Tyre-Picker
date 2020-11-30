import React from 'react';
import styles from './CardList.module.scss';
import Card from '../Card';

const CardList = (props) => {
	const { tyres } = props;

	const results = tyres.map((tyre) => <Card key={tyre.id} tyre={tyre} />);
	return (
		<>
			<section className={styles.cardList}>{results}</section>
		</>
	);
};

export default CardList;
