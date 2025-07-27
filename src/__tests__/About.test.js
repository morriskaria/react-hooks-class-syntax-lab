import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../components/About';
import { isClassComponent } from './testHelpers'; // Ensure this exactly matches filename

test('uses a class component', () => {
  expect(isClassComponent(About)).toBe(true);
});

test('renders an about div', () => {
  render(<About />);
  expect(screen.getByTestId('about')).toBeInTheDocument();
});