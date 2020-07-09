import React from 'react';
import { render } from '@testing-library/react';
import { Home } from './Home';

test('Renders text', () => {
    const {getByText} = render(<Home />);
    const linkElement = getByText(/Quedate en casa/i);
    expect(linkElement).toBeInTheDocument();
});