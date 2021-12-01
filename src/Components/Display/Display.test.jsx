import { screen, render } from '@testing-library/react';
import Display from './Display';

it('Should render Picker component', () => {
	const { container } = render(
		<Display catchphrases={['bingo!', 'jabroney!']} />
	);

	expect(container).toMatchSnapshot();
});
