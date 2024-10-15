import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PageButton } from '../components/styles/button/button.ts';
import '@testing-library/jest-dom';

describe.skip('Test Button Styled-Component', () => {
    // Test default inactive state styles
    test('renders with default inactive styles', () => {
        render(<PageButton $active={false}>Inactive Button</PageButton>);
        
        const button = screen.getByText('Inactive Button');
        
        // Assert default inactive styles using RGB values
        expect(button).toHaveStyle('background-color: rgb(240, 240, 240)'); // equivalent to #f0f0f0
        expect(button).toHaveStyle('color: rgb(0, 0, 0)'); // equivalent to #000
    });

    // Test active state styles
    test('renders with active styles', () => {
        render(<PageButton $active={true}>Active Button</PageButton>);
        
        const button = screen.getByText('Active Button');
        
        // Assert active styles using RGB values
        expect(button).toHaveStyle('background-color: rgb(0, 123, 255)'); // equivalent to #007bff
        expect(button).toHaveStyle('color: rgb(255, 255, 255)'); // equivalent to #fff
    });

    // Test hover styles
    test('applies hover styles', () => {
        render(<PageButton $active={false}>Hover Button</PageButton>);
        
        const button = screen.getByText('Hover Button');

        // Simulate hover
        userEvent.hover(button);
        
        // Assert hover styles using RGB values
        expect(button).toHaveStyle('background-color: rgb(0, 86, 179)'); // equivalent to #0056b3
        expect(button).toHaveStyle('color: white');
    });
});

