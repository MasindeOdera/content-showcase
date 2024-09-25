import { render } from '@testing-library/react';
import PublicationList from '../components/PublicationList';
import '@testing-library/jest-dom';
// import { Publication } from '../types';
import { Provider } from 'react-redux';
import { store } from '../store/store';

describe('PublicataionList component', () => {
  test('renders list of publications correctly', () => {
    render(
      <Provider store={store}>
        <PublicationList />
      </Provider>
    );
  });
});
