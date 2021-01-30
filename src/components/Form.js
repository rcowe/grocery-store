import React from 'react';

export default function Form({ product }) {
	return (
		<div key={product.products.id} className={'grocery-form'}>
			<h1>{product.products[0].title}</h1>
			<img src={products.product[0].image} />
		</div>
	);
}
