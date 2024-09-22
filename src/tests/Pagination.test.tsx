import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../components/Pagination';

test('calls onPageChange when a page is clicked', () => {
  const onPageChange = jest.fn();
  render(<Pagination currentPage={1} totalPages={5} onPageChange={onPageChange} />);

  const nextPageButton = screen.getByText('2');
  fireEvent.click(nextPageButton);

  // Expect the onPageChange callback to be called with the new page number
  expect(onPageChange).toHaveBeenCalledWith(2);
});
