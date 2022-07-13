import { render, screen } from '@testing-library/react';
import App from './App';

xtest('renders learn react link', () => { //x in front from test means exclude this file from testing
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
