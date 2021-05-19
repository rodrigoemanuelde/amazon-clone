import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { db, auth } from '../../firebase';

const Login = () => {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const singIn = (e) => {
		e.preventDefault();

		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push('/');
			})
			.catch((err) => alert(err.message));
	};

	const register = (e) => {
		e.preventDefault();
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				if (auth) {
					history.push('/');
				}
			})
			.catch((err) => {
				alert(err.message);
			});
	};

	return (
		<div className='login'>
			<Link to='/'>
				<img
					className='login__logo'
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
					alt='Amazon_logo'
				/>
			</Link>
			<div className='login__container'>
				<h1>Sing-in</h1>

				<form>
					<h5>E-mail</h5>
					<input
						type='text'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<h5>Password</h5>
					<input
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button
						onClick={singIn}
						type='submit'
						className='login__signInButton'
					>
						Sign In
					</button>
				</form>

				<p>
					By signing-in you agree to the AMAZON FAKE CLONE
					Conditions of Use & Sale. Please see our Privacy
					Notice, our Cookies Notice and our Interest-Based
					Ads Notice.
				</p>

				<button
					className='login__registerButton'
					onClick={register}
				>
					Create your Amazon Account
				</button>
			</div>
		</div>
	);
};

export default Login;
