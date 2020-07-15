import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

test('renders Hello world!', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Hello world!/i);
  expect(titleElement).toBeInTheDocument();
});
