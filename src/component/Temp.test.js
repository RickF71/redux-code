import { render, screen } from '@testing-library/react';
import Temp from './Temp';

test('list contains 4 animals', () => {
  render(<Temp />);
  screen.debug();
  const listElement = screen.getByRole('list');
  const listItems = screen.getAllByRole('listitem');

  expect(listElement).toBeInTheDocument();
  expect(listElement).toHaveClass('animals');
  expect(listItems.length).toEqual(4);
});
