import React from 'react';
import './Subtotal.css';
import NumberFormat from 'react-number-format';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';
import { getCartTotal } from '../../context/reducer';

const Subtotal = () => {
	const history = useHistory();
	const [{ cart }, dispatch] = useStateValue();
	return (
		<div className='subtotal'>
			<NumberFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({cart.length} items):{' '}
							<strong>{value}</strong>
						</p>
						<small className='subtotal__gift'>
							<input type='checkbox' /> This order contains
							a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={getCartTotal(cart)}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>
			<button onClick={(e) => history.push('/payment')}>
				Proceed to Checkout
			</button>
		</div>
	);
};

export default Subtotal;
