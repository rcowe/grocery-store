import React, { useState } from 'react';

export default function HomeScreen(props) {
	const [groceryTodo, updateGrocery] = useState('');

	const addGroceryItem = element => {
		let promptItemText = window.prompt('Enter Your Text', 'enter text here');
		const list = document.getElementById(element);
	};

	return (
		<div className={'Page'}>
			<div className={'column'}></div>
		</div>
	);
}
