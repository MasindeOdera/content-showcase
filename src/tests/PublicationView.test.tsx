import { render, waitFor, fireEvent, screen } from '@testing-library/react';
import PublicationView from '../views/PublicationView';
import { fetchProjects } from '../services/apiService';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import '@testing-library/jest-dom';

// Mock the fetchProjects service
jest.mock('../services/apiService', () => ({
  fetchProjects: jest.fn(),
}));

describe('PublicationView view', () => {
  test('fetchProjects returns data with search query and renders components', async () => {
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

    // Render the component wrapped with Provider
    render(
      <Provider store={store}>
        <PublicationView />
      </Provider>
    );

    // Simulate user typing in the search input
    const searchInput = screen.getByPlaceholderText('Type to start search...');
    fireEvent.change(searchInput, { target: { value: 'Test' } });

    // Wait for fetchProjects to be called with the correct parameters
    await waitFor(() => {
      expect(fetchProjects).toHaveBeenCalledWith(1, { search: 'Test', category: '' });
    });

    // Check that components are rendered
    expect(screen.getByPlaceholderText('Type to start search...')).toBeInTheDocument(); // Check for SearchBar component
    expect(screen.getByText(/Filter by Category/i)).toBeInTheDocument(); // Check for Filter component
    
    // Custom function to find the publication text, considering nested elements
    // const publicationElement = await screen.findByText((_, element) => {
    //   // Handle the case where element is null
    //   if (!element) return false;
    //   const hasText = (node: HTMLElement) => node.textContent === 'Test Publication 1';
    //   const elementHasText = hasText(element as HTMLElement);
    //   const childrenDontHaveText = Array.from(element.children).every((child) => !hasText(child as HTMLElement));
    //   return elementHasText && childrenDontHaveText;
    // });

    // expect(publicationElement).toBeInTheDocument();
  });
});
