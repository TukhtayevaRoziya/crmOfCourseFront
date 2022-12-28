import * as React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

test('should just test', () => {
  render(<App />)
  expect(screen.getByText(/Log in/i)).toBeInTheDocument()
})


// describe('App', () => {
//   // it('renders App component', () => {
//     render(<App />);
//   // });
// });