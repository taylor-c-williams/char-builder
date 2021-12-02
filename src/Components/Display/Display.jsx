export default function Display({ catchphrases }) {
	return (
		<section className="catchphrase-display">
			Catchphrases:
			{catchphrases.map((catchphrase) => (
				<p key={catchphrase}>"{catchphrase}"</p>
			))}
		</section>
	);
}
