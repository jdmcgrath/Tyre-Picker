import React from 'react';
import styles from './NavBar.module.scss';
import SearchBox from '../SearchBox';

const NavBar = (props) => {
	const { handleChange, prevPage, nextPage, sizeSelect } = props;
	return (
		<section className={styles.sideNav}>
			<div className={styles.navContent}>
				<div className={styles.searchBox}>
					<SearchBox placeholder="Search an exact item name..." handleChange={handleChange} />
				</div>
				<section className={styles.sizeSelect}>
					Choose a size:
					<select className={styles.select} name="size" id="size" onChange={sizeSelect}>
						<option value="205/55 R16">205/55 R16</option>
						<option value="145/65 R15">145/65 R15</option>
						<option value="185/60 R15">185/60 R15</option>
					</select>
				</section>
				<section className={styles.btnContainer}>
					<button onClick={prevPage}>Previous Page</button>
					<button onClick={nextPage}>Next Page</button>
				</section>
			</div>
		</section>
	);
};

export default NavBar;
