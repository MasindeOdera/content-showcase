import { render, screen } from '@testing-library/react';
import PublicationList from '../components/PublicationList';
import '@testing-library/jest-dom';
import { Publication } from '../types';

describe('PublicataionList component', () => {
  test('renders list of publications correctly', () => {
    const publications: Publication[] = [
      {
        id: '1',
        name: 'Publication 1',
        category: 'Category A',
        description: 'Description 1',
        created_on: '2023-09-01',
        modified_on: '2023-09-10',
        _computed: { editions_count: 2, editions_published_count: 1, background_color: '#FFFFFF' },
        _links: { published: { href: '#' }, self: { href: '#' } },
        _embedded: { account: { id: 1, _links: { self: { href: '#' } } } },
      },
      {
        id: '2',
        name: 'Publication 2',
        category: 'Category B',
        description: 'Description 2',
        created_on: '2023-08-15',
        modified_on: '2023-09-12',
        _computed: { editions_count: 3, editions_published_count: 2, background_color: '#FFFFFF' },
        _links: { published: { href: '#' }, self: { href: '#' } },
        _embedded: { account: { id: 2, _links: { self: { href: '#' } } } },
      },
    ];
  
    render(<PublicationList publications={publications} />);
  
    // Check if both publications are rendered
    expect(screen.getByText(/Publication 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Publication 2/i)).toBeInTheDocument();
  });
});
