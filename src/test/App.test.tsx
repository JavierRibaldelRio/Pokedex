import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('Renders <main>', () => {
  const { container } = render(<App />);
  const main = container.querySelector('main')
  expect(main).toBeInTheDocument();
});

