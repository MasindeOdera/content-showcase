import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from '../components/styles/input/input.ts';

describe('Input Styled Component', () => {
  test('renders with correct styles', () => {
    // Render the Input component
    render(<Input placeholder="Test Input" />);

    // Find the input element by placeholder text
    const inputElement = screen.getByPlaceholderText('Test Input');

    // Check if the input has the correct styles
    expect(inputElement).toHaveStyle('padding: 10px');
    expect(inputElement).toHaveStyle('width: 100%');
    expect(inputElement).toHaveStyle('border: 1px solid #ccc');
    expect(inputElement).toHaveStyle('border-radius: 5px');
  });
});
