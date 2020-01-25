import React, { useState } from 'react';
import api from '../utils/api';

const Login = (props) => {
	// make a post request to retrieve a token from the api
	// when you have handled the token, navigate to the BubblePage route
	const [ data, setData ] = useState({
		username: '',
		password: ''
	});

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		api().post('/api/login', data).then((res) => {
			localStorage.setItem('token', res.data.token);
			props.history.push('/bubbles');
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>Welcome to the Bubble App!</h1>
			{/* <p>Build a login page here</p> */}
			<input type="text" name="username" placeholder="Username" value={data.name} onChange={handleChange} />
			<input
				type="password"
				name="password"
				placeholder="Password"
				value={data.password}
				onChange={handleChange}
			/>
			<button type="submit">Log In</button>
		</form>
	);
};

export default Login;
