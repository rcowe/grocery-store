import React, { useState, useEffect } from 'react';
import SelectAdd from './SelectAdd';
// import MainImg from '../images/tomatoes-shop-unsplash.png';

export default function App(props) {
	// function img1() {
	// 	return <img src={MainImg} alt="Img1" />;
	// }

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
		<div className="container">
			<header className="header-of-page">
				<div className="page-title">
					<h1>The Groceries App</h1>
				</div>
				<form onSubmit={handleSubmit} className="search-bar">
					{/* <input type="text" className="grocery-input" /> */}
					<input
						id="option"
						type="text"
						value={query.option}
						onChange={handleChange}
					/>
					<input type="submit" value="Find Product" />
				</form>
			</header>
			<div className="list-results">
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
			</div>
			{/* <div className="page-image">
				<div className="image-holder">
					<p>Image Goes Here</p>
					<p>Image Goes Here</p>
					<p>Image Goes Here</p>
				</div>
			</div>
			<div className="grocery-display-items">
				<div className="grocery-card-1">
					<h2>Card 1</h2>
				</div>
				<div className="grocery-card-2">
					<h2>Card 2</h2>
				</div>
				<div className="grocery-card-3">
					<h2>Card 3</h2>
				</div>
			</div> */}
		</div>
	);
}
