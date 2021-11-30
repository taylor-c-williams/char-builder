export default function Display({ catchphrases }) {
	return (
		<div>
			{catchphrases.map((catchphrase) => (
				<p>{catchphrase}</p>
			))}
		</div>
	);
}
