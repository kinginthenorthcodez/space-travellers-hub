import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import MyProfile from '../components/myprofile';
import store from '../redux/configureStore';

// Dragons component tests
describe('Myprofile snapshot', () => {
  afterEach(cleanup);

  it('should render myprofile correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    expect(asFragment(<MyProfile />)).toMatchSnapshot();
  });
});
