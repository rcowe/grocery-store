import React from 'react';

export default function SelectDrop() {
	return (
		<div className={'selection'}>
			<select name="items" className={'item-filter'}>
				<option value={query.inputNum(10)}>See 10 Items</option>
				<option value="purchased">Purchased</option>
				<option value="to-buy">To Buy</option>
			</select>
		</div>
	);
}
