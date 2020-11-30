import React from 'react';
import styles from './Card.module.scss';

const Card = (props) => {
	const { tyre } = props;
	const { brand, name, size, price } = tyre;
	return (
		<div className={styles.card}>
			<div className={styles.name}>
				<h2>{brand}</h2>
				<h3>{name}</h3>
			</div>
			<span>Size: {size}</span>
			<p>{price}</p>
		</div>
	);
};

export default Card;
