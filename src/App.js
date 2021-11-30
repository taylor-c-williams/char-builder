import './App.css';
import { useState } from 'react';
import Character from './Components/Character/Character';
import Display from './Components/Display/Display';
import Picker from './Components/Picker/Picker';

function App() {
	// Ask about set state in both app and component (Picker)
	const [head, setHead] = useState('dog');
	const [middle, setMiddle] = useState('fancy');
	const [pants, setPants] = useState('leg');
	const [newCatchphrase, setNewCatchphrase] = useState('');
	const [catchphrases, setCatchphrases] = useState([]);

	const handleClick = () => {
		setCatchphrases((prevState) => [...prevState, newCatchphrase]);
	};

	return (
		<section className="App">
			<h1>Char Designer!</h1>

			<Picker
				head={head}
				onHeadChange={setHead}
				middle={middle}
				onMiddleChange={setMiddle}
				pants={pants}
				onPantsChange={setPants}
				newCatchPhrase={newCatchphrase}
				setCatchphrase={setNewCatchphrase}
				handleClick={handleClick}
			/>

			<Display catchphrases={catchphrases} />

			<Character head={head} middle={middle} pants={pants} />
		</section>
	);
}

export default App;
