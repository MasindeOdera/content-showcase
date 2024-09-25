import { render } from '@testing-library/react';
import SearchBar from '../components/SearchBar';
import { Provider } from 'react-redux';
import { store } from '../store/store';

describe('SearchBar component', () => {
  test('renders SearchBar correctly', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
  });
});
