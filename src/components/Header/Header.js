/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';
import { auth } from '../../firebase';

const Header = () => {
	const [{ cart, user }, dispatch] = useStateValue();

	const handleAuthentication = () => {
		if (user) {
			auth.signOut();
		}
	};

	return (
		<div className='header'>
			<Link to='/'>
				<img
					className='header__logo'
					src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
				/>
			</Link>
			<div className='header__deliverTo'>
				<LocationOnIcon className='header__location' />
				<div className='header__option'>
					<span className='header__optionLineOne'>
						Deliver to
					</span>
					<span className='header__optionLineTwo'>
						Argentina
					</span>
				</div>
			</div>
			<div className='header__search'>
				<input
					className='header__searchInput'
					type='text'
				/>
				<SearchIcon className='header__searchIcon' />
			</div>
			<div className='header__nav'>
				<Link to={!user && '/login'}>
					<div
						onClick={handleAuthentication}
						className='header__option'
					>
						<span className='header__optionLineOne'>
							Hello {!user ? 'Guest' : user.email}
						</span>
						<span className='header__optionLineTwo'>
							{user ? 'Sing Out' : 'Sing In'}
						</span>
					</div>
				</Link>
				<Link to='/orders'>
					<div className='header__option'>
						<span className='header__optionLineOne'>
							Returns
						</span>
						<span className='header__optionLineTwo'>
							& Orders
						</span>
					</div>
				</Link>
				<div className='header__option'>
					<span className='header__optionLineOne'>
						Your
					</span>
					<span className='header__optionLineTwo'>
						Prime
					</span>
				</div>

				<Link to='/checkout'>
					<div className='header__optionBasket'>
						<ShoppingCartIcon />
						<span className='header__optionLineTwo header__basketCount'>
							{cart?.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Header;
