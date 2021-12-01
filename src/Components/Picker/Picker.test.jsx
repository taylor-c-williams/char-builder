import { screen, render } from '@testing-library/react';
import Picker from './Picker';

it('Should render Picker component', () => {
	const { container } = render(<Picker />);
	const selectHead = screen.getByLabelText(/Head:/);
	const selectMiddle = screen.getByLabelText(/Body:/);
	const selectPants = screen.getByLabelText(/Legs:/);
	const input = screen.getByLabelText(/Catchphrase:/);

	expect(selectHead).toBeInTheDocument();
	expect(selectMiddle).toBeInTheDocument();
	expect(selectPants).toBeInTheDocument();
	expect(input).toBeInTheDocument();
	expect(container).toMatchSnapshot();
});
