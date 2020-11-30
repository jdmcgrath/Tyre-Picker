import React from 'react';
import styles from './NavBar.module.scss';
import SearchBox from '../SearchBox';

const NavBar = (props) => {
	const { handleChange, prevPage, nextPage } = props;
	return (
		<section className={styles.sideNav}>
			<div className={styles.navContent}>
				<div className={styles.searchBox}>
					<SearchBox placeholder="Search..." handleChange={handleChange} />
				</div>
				<section className={styles.btnContainer}>
					<button onClick={prevPage}>Previous Page</button>
					<button onClick={nextPage}>Next Page</button>
				</section>
			</div>
		</section>
	);
};

export default NavBar;
