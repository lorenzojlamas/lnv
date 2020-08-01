import React from 'react';
import { render } from '@testing-library/react';
import { Xplora } from './Xplora';


test('Given a Xplora instance when is render, then return a element with correct title', () => {
  const { getByText } = render(<Xplora />);
  const linkElement = getByText(/Xplora/i);
  expect(linkElement).toBeInTheDocument();
});
