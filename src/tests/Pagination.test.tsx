import { render } from '@testing-library/react';
import Pagination from '../components/Pagination';
import { Provider } from 'react-redux';
import { store } from '../store/store';

describe('Pagination component', () => {
  test('renders Pagination correctly', () => {
    render(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );
  });
});
