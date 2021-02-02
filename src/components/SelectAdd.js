import React from 'react';

export default function SelectDrop({ product, addProduct, updateProduct }) {
	return (
		<div className="search-bar-results">
			<div className="result-card-item" key={`${product.id}`}>
				<h1>{product.title}</h1>
				<img src={product.image} />
				<button type="button" onClick={addProduct}>
					Add Item
				</button>
			</div>
		</div>
	);
}
