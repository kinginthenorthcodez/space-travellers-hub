import React from 'react';
import { BrowserRouter as Rounter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Nav from '../components/Nav';

// Nav component tests
describe('Nav snapshot', () => {
  afterEach(cleanup);

  it('should render Nav correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Rounter>
          <Nav />
        </Rounter>
      </Provider>,
    );
    expect(asFragment(<Nav />)).toMatchSnapshot();
  });
});
