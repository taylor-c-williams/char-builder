import React from 'react';

export default function Picker({
	head,
	onMiddleChange,
	onHeadChange,
	middle,
	newCatchPhrase,
	setCatchPhrase,
	handleClick,
}) {
	const [head, setHead] = useState('dog');
	const [middle, setMiddle] = useState('fancy');
	const headPics = ['bird', 'duck', 'dog'];
	const middlePics = ['blue', 'fancy', 'pink', 'red'];
	const pantsPics = ['blue', 'dog', 'leg', 'white'];

	return (
		<section className="Picker">
			{/* Head Dropdown */}
			<label>
				Head
				<select value={head} onchange={(e) => onHeadChange(e.target.value)}>
					{headPics.map((pic) => (
						<option key={pic}>{pic}</option>
					))}
				</select>
			</label>

			{/* Middle Dropdown */}
			<label>
				Middle
				<select value={middle} onChange={(e) => onMiddleChange(e.target.value)}>
					{middlePics.map((pic) => (
						<option key={pic}>{pic}</option>
					))}
				</select>
			</label>

			{/* Pants Dropdown */}
			<label>
				Pants
				<select value={pants} onChange={(e) => onPantsChange(e.target.value)}>
					{pantsPics.map((pic) => (
						<option key={pic}>{pic}</option>
					))}
				</select>
			</label>

			{/* Catchphrase Input */}
			<label>
				Catchphrase
				<input
					value={newCatchPhrase}
					onChange={(e) => setCatchPhrase(e.target.value)}
				/>
				<button onClick={handleClick}>Add Catchphrase!</button>
			</label>
		</section>
	);
}
