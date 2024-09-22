import React from 'react';
import { render, waitFor, fireEvent, screen } from '@testing-library/react';
import PublicationView from '../views/PublicationView';
import { fetchProjects } from '../services/apiService';
import '@testing-library/jest-dom';

// Mock the fetchProjects service
jest.mock('../services/apiService', () => ({
  fetchProjects: jest.fn(),
}));

test('fetchProjects returns data with search query', async () => {
  // Mocking the API response with search query
  (fetchProjects as jest.Mock).mockResolvedValueOnce({
    items: [
      {
        id: '1',
        name: 'Test Publication 1',
        category: 'Category A',
        description: 'Test description 1',
        created_on: '2023-01-01',
        modified_on: '2023-01-02',
        _computed: { editions_count: 2, editions_published_count: 1, background_color: '#FFF' },
        _links: { published: { href: '#' }, self: { href: '#' } },
        _embedded: { account: { id: 1, _links: { self: { href: '#' } } } },
      }
    ],
    totalPages: 1,
  });

  // Render the component
  render(<PublicationView />);

  // Simulate user typing in the search input
  const searchInput = screen.getByPlaceholderText('Search');
  fireEvent.change(searchInput, { target: { value: 'Test' } });

  // Wait for fetchProjects to be called with the correct parameters
  await waitFor(() => {
    expect(fetchProjects).toHaveBeenCalledWith(1, { search: 'Test', category: '' });
  });

  // Wait for the publication to appear in the DOM (using regex or custom matcher)
  const publicationElement = await screen.findByText(/Test Publication 1/i);
  expect(publicationElement).toBeInTheDocument();
});
