import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../../context/StateProvider';

const CheckoutProduct = ({
	id,
	image,
	title,
	price,
	rating,
	hideButton,
}) => {
	const [{ cart }, dispatch] = useStateValue();

	const removeFromCart = () => {
		dispatch({
			type: 'REMOVE_FROM_CART',
			id: id,
		});
	};

	return (
		<div className='checkoutProduct'>
			<img
				className='checkoutProduct__image'
				src={image}
				alt={title}
			/>

			<div className='checkoutProduct__info'>
				<p className='checkoutProduct__title'>{title}</p>
				<p className='checkoutProduct__price'>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className='checkoutProduct__rating'>
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p key={i}>⭐</p>
						))}
				</div>
				{!hideButton && (
					<button onClick={removeFromCart}>
						Remove from Cart
					</button>
				)}
			</div>
		</div>
	);
};

export default CheckoutProduct;
