import React from 'react';

export default function Form({ product }) {
	return (
		<div className={'Page-wrapper'}>
			<div className={'Page'}>
				<div className={'column'}>
					<div className={'heading'}>
						<h1>{product.type}</h1>
						<h1>{product[0].id}</h1>
						<h1>{product[0].id}</h1>
						{/* <img src={product[0].image} /> */}
					</div>
				</div>
			</div>
		</div>
	);
}
