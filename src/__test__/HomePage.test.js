import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import HomePage from '../components/HomePage';

describe('testing Home page', () => {
  it('should render the Home page correctly', () => {
    const Home = render(
      <Router>
        <Provider store={store}>
          <HomePage />
        </Provider>
      </Router>,
    );
    expect(Home).toMatchSnapshot();
  });
});
