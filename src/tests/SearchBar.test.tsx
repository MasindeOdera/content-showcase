import { render } from '@testing-library/react';
import SearchBar from '../components/SearchBar.tsx';
import { Provider } from 'react-redux';
import { store } from '../store/store.ts';

describe('SearchBar component', () => {
  test('renders SearchBar correctly', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
  });
});
