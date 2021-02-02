import React, { useState, useEffect } from 'react';
// import Form from './Form';
import SelectAdd from './SelectAdd';
// import Data from '../data';

export default function App(props) {
	// 	const [item, updateItem] = useState(Data);
	const apiKey = '324ce7ec9b1841a38126e152fb31bc45';
	// let inputValue = '';

	const [query, updateQuery] = useState({
		baseURL: 'https://api.spoonacular.com/food/products/search?query=',
		option: '',
		number: '&number=10',
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
						number: '&number=10',
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
			searchURL: query.baseURL + query.option + query.number + query.apiKey
		});
	};

	const addProduct = event => {
		event.preventDefault();
		updateProduct([...product, newProduct]);
		updateQuery({
			baseURL: 'https://api.spoonacular.com/food/products/search?',
			option: '',
			number: '&number=10',
			apiKey: '&apiKey=' + apiKey,
			searchURL: ''
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
			</form>
			<div className={'Page'}>
				{product.map(product => {
					return (
						<SelectAdd
							key={`${product.id}`}
							product={product}
							updateProduct={updateProduct}
							addProduct={addProduct}
						/>
					);
				})}
				{/* <Form
					product={product}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					addProduct={addProduct}
				/> */}
				{/* {product.length ? <Form product={product} /> : ''} */}
			</div>

			{/* <SelectDrop /> */}
		</div>
	);
}
