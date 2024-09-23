import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FilterSelect from '../components/styles/select/select';

describe('FilterSelect Styled Component', () => {
  test('renders with correct styles', () => {
    // Render the FilterSelect component
    render(
      <FilterSelect data-testid="filter-select">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </FilterSelect>
    );

    // Find the select element using the test id
    const selectElement = screen.getByTestId('filter-select');

    // Check if the select has the correct styles
    expect(selectElement).toHaveStyle('width: 140px');
    expect(selectElement).toHaveStyle('padding: 10px');
    expect(selectElement).toHaveStyle('border: 1px solid #ccc');
    expect(selectElement).toHaveStyle('border-radius: 5px');
    expect(selectElement).toHaveStyle('margin-top: 10px');
  });
});
