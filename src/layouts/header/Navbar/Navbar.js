import React, { useContext, useEffect, useState } from 'react';
import '../../../UI/navbar.css';
import BrowseCategories from '../Navbar/BrowseCategories';
import vector from '../../../assets/icon/header/Vector.svg';
import { NavLink } from 'react-router-dom';
import { allProductContext } from '../../../context/allProductContext';


function Navbar() {
	let { favorite, setFavorite } = useContext(allProductContext);
	const [burgerOpen, setBurgerOpen] = useState(true);

	useEffect(() => {
		if (window.outerWidth > 1077) {
			setBurgerOpen(true);
		} else if (window.outerWidth < 1076) {
			setBurgerOpen(false);
		}
	}, [window.outerWidth]);

	return (
		<div className="navbarBox">
			<div className="navbarBoxLeft">
				<BrowseCategories />
				<a href="#" className="toggle-button" onClick={() => setBurgerOpen((prev) => !prev)}>
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
				</a>
				<div className="navbarCategories">
					{burgerOpen && (
						<ul className="navbar">
							<li>
								<NavLink to={'/'}>Home</NavLink>
							</li>
							<img src={vector} />
							<li>
								<NavLink to={'/product'}>Catalog</NavLink>
							</li>
							<img src={vector} />
							<li>Blog</li>
							<li>
								Pages &nbsp;
								<img src={vector} />
							</li>
							<li>
								<NavLink to={'/favorite'}>Favorite{favorite.length}</NavLink>
							</li>
							<li>About us</li>
						</ul>
					)}
				</div>
			</div>
			<div className="navbarBoxRight">
				<p>
					<b>30 Days Free Return</b>
				</p>
			</div>
		</div>
	);
}

export default Navbar;