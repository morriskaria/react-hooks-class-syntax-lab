import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../components/App';

test('renders the correct child components', () => {
  render(<App />);
  
  // Check for home section
  expect(screen.getByTestId('home')).toBeInTheDocument();
  
  // Check for about section
  expect(screen.getByTestId('about')).toBeInTheDocument();
  
  // Check for nav section using testid
  expect(screen.getByTestId('nav')).toBeInTheDocument();
  
  // Optional: Also check for navigation role if needed
  expect(screen.getByRole('navigation')).toBeInTheDocument();
});