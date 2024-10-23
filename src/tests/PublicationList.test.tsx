import { render } from '@testing-library/react';
import PublicationList from '../components/PublicationList.tsx';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../store/store.ts';

describe.skip('PublicataionList component', () => {
  test('renders list of publications correctly', () => {
    render(
      <Provider store={store}>
        <PublicationList />
      </Provider>
    );
  });
});
