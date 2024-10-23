import { render } from '@testing-library/react';
import Pagination from '../components/Pagination.tsx';
import { Provider } from 'react-redux';
import { store } from '../store/store.ts';

describe.skip('Pagination component', () => {
  test('renders Pagination correctly', () => {
    render(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );
  });
});
