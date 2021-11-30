export default function Display({ catchphrases }) {
	return (
		<div>
			Catchphrases:
			{catchphrases.map((catchphrase) => (
				<p>"{catchphrase}"</p>
			))}
		</div>
	);
}
