import React, { useState, useEffect } from 'react';
import Form from './Form';
// import Data from '../data';

export default function App(props) {
	// 	const [item, updateItem] = useState(Data);
	const apiKey = '324ce7ec9b1841a38126e152fb31bc45';
	// let inputValue = '';
	let viewNum = 1;

	const [query, updateQuery] = useState({
		baseURL: 'https://api.spoonacular.com/food/products/search?query=',
		option: '',
		number: '&number=',
		inputNum: viewNum,
		apiKey: '&apiKey=' + apiKey,
		searchURL: ''
	});

	const [product, updateProduct] = useState([]);
	useEffect(() => {
		(async () => {
			if (query.searchURL) {
				try {
					const response = await fetch(query.searchURL);
					const data = await response.json();
					await updateProduct(data.products);
				} catch (error) {
					console.error(error);
				} finally {
					updateQuery({
						baseURL: 'https://api.spoonacular.com/food/products/search?',
						option: '',
						number: '&number=',
						inputNum: '',
						apiKey: '&apiKey=' + apiKey,
						searchURL: ''
					});
				}
			}
		})();
	}, [query]);

	const handleChange = event => {
		updateQuery({
			...query,
			...{
				[event.target.id]: event.target.value
			}
		});
	};

	const handleSubmit = event => {
		event.preventDefault();
		updateQuery({
			...query,
			searchURL:
				query.baseURL +
				query.option +
				query.number +
				query.inputNum +
				query.apiKey
		});
	};

	return (
		<div className="Pagre-wrapper">
			<h1>The Groceries App</h1>

			<form onSubmit={handleSubmit}>
				{/* <input type="text" className="grocery-input" /> */}
				<label htmlFor="option"> Search</label>
				<input
					id="option"
					type="text"
					value={query.option}
					onChange={handleChange}
				/>
				<input type="submit" value="Find Product" />

				{/* <div className={'selection'}>
					<select name="items" className={'item-filter'}>
						<option value={query.inputNum(10)}>See 10 Items</option>
						<option value="purchased">Purchased</option>
						<option value="to-buy">To Buy</option>
					</select>
				</div> */}
				<div className={'Page'}>
					{product.length ? <Form product={product} /> : ''}
				</div>
			</form>

			{/* <div className={'container'}>
				{products.map(groceryItem => {
					return (
						<Form
							key={`${groceryItem.item}-${groceryItem.brand}`}
							groceryItem={groceryItem}
						/>
					);
				})}
			</div> */}
		</div>
	);
}
