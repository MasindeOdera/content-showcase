import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Container from '../components/styles/container/Container';

describe('Container Styled Component', () => {
  test('applies correct CSS properties', () => {
    // Render the Container component with some content inside
    render(<Container>Test Content</Container>);
    
    const containerElement = screen.getByText('Test Content');
    
    // Check if the Container has the correct styles
    expect(containerElement).toHaveStyle('margin: 10px auto');
    expect(containerElement).toHaveStyle('display: flex');
    expect(containerElement).toHaveStyle('flex-direction: column');
  });
});
