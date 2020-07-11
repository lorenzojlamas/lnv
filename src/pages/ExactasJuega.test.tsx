import React from 'react';
import { render } from '@testing-library/react';
import { ExactasJuega } from './ExactasJuega';


test('Given a ExactasJuega instancen when is render, then return a element with correct title', () => {
  const { getByText } = render(<ExactasJuega />);
  const linkElement = getByText(/Exactas juega/i);
  expect(linkElement).toBeInTheDocument();
});
