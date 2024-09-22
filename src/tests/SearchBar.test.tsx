import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

describe('SearchBar component', () => {
  test('calls onSearch with input value when user types', () => {
    const onSearch = jest.fn();
    render(<SearchBar onSearch={onSearch} />);
  
    const input = screen.getByPlaceholderText(/search/i);
    fireEvent.change(input, { target: { value: 'Test Search' } });
  
    // Expect the onSearch function to be called with the correct input value
    expect(onSearch).toHaveBeenCalledWith('Test Search');
  });
});
