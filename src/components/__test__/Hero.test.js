import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

test('displays paragraph text', () => {
  render(<Hero />);
  const linkElement = screen.getByText(/Donald/i);
  expect(linkElement).toBeInTheDocument();
});
