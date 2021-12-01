import { screen, render } from '@testing-library/react';
import Character from './Character';

it('Should render Character component', () => {
	const { container } = render(<Character head="dog" middle="fancy" />);
	const head = screen.getByLabelText(/head/);

	expect(head).toHaveStyle(`background-image: url(./dog-head.png`);
	expect(container).toMatchSnapshot();
});
