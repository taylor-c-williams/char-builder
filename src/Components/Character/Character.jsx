export default function Character({ head, middle, pants }) {
	return (
		<section className="character-display">
			{/* Head Display */}
			<article
				aria-label="head"
				style={{
					backgroundImage: `url(./${head}-head.png)`,
					height: 150,
					width: 150,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
				}}
			></article>

			{/* Middle Display */}
			<article
				aria-label="middle"
				style={{
					backgroundImage: `url(./${middle}-middle.png)`,
					height: 150,
					width: 150,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
				}}
			></article>

			{/* Pants Display */}
			<article
				aria-label="pants"
				style={{
					backgroundImage: `url(./${pants}-pants.png)`,
					height: 350,
					width: 150,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
				}}
			></article>
		</section>
	);
}
