import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Dragons from '../components/dragons';

// Dragons component tests
describe('Dragons snapshot', () => {
  afterEach(cleanup);

  it('should render dragons correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Dragons />
      </Provider>,
    );
    expect(asFragment(<Dragons />)).toMatchSnapshot();
  });
});
