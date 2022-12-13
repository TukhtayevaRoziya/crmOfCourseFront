import * as React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

test('should just test', () => {
  render(<App />)
  screen.debug()
})


// describe('App', () => {
//   // it('renders App component', () => {
//     render(<App />);
//   // });
// });