import React from 'react';

export default function Picker({
	head,
	onHeadChange,
	middle,
	onMiddleChange,
	pants,
	onPantsChange,
	newCatchPhrase,
	setNewCatchphrase,
	handleClick,
}) {
	// Set state in both app and component ??
	// const [head, setHead] = useState('dog');
	// const [middle, setMiddle] = useState('fancy');
	// const [pants, setPants] = useState('leg');

	const headPics = ['bird', 'duck', 'dog'];
	const middlePics = ['blue', 'fancy', 'pink', 'red'];
	const pantsPics = ['blue', 'dog', 'leg', 'white'];

	return (
		<section className="picker">
			{/* Head Dropdown */}
			<form>
				<label>
					Head:
					<select value={head} onChange={(e) => onHeadChange(e.target.value)}>
						{headPics.map((pic) => (
							<option key={pic}>{pic}</option>
						))}
					</select>
				</label>

				{/* Middle Dropdown */}
				<label>
					Body:
					<select
						value={middle}
						onChange={(e) => onMiddleChange(e.target.value)}
					>
						{middlePics.map((pic) => (
							<option key={pic}>{pic}</option>
						))}
					</select>
				</label>

				{/* Pants Dropdown */}
				<label>
					Legs:
					<select value={pants} onChange={(e) => onPantsChange(e.target.value)}>
						{pantsPics.map((pic) => (
							<option key={pic}>{pic}</option>
						))}
					</select>
				</label>

				{/* Catchphrase Input */}
				<label>
					Catchphrase:
					<textarea
						id="catchphrase-button"
						type="text"
						value={newCatchPhrase}
						onChange={(e) => setNewCatchphrase(e.target.value)}
					/>
				</label>
			</form>
			<button onClick={handleClick}>Add!</button>
		</section>
	);
}
