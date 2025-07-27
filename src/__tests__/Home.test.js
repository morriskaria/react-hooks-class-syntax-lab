import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../components/Home';

test('renders a div with id "home"', () => {
  render(<Home />);
  expect(screen.getByTestId('home')).toBeInTheDocument();
});

test('renders an h1 with the correct text', () => {
  render(<Home name="Your Name" city="Your City" />);
  expect(screen.getByText('Your Name is a Web Developer from Your City')).toBeInTheDocument();
});

test('uses the color prop to set the inline style color of the h1', () => {
  render(<Home color="firebrick" />);
  const h1 = screen.getByRole('heading', { level: 1 });
  expect(h1).toHaveStyle('color: firebrick');
});