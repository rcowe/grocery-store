import React from 'react';

export default function Form({ product }) {
	return (
		<div className={'heading'}>
			<h1>{product[0].title}</h1>
			<h1>{product[0].id}</h1>
			{/* <h1>{product.id}</h1> */}
			<img src={product[0].image} />
		</div>
	);
}
