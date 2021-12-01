export default function Display({ catchphrases }) {
	return (
		<div>
			Catchphrases:
			{catchphrases.map((catchphrase) => (
				<p key={catchphrase}>"{catchphrase}"</p>
			))}
		</div>
	);
}
