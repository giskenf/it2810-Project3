import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/App';
import {HeaderComponent} from "./components/HeaderComponent/HeaderComponent";
import {Provider} from 'react-redux';
import store from '../src/store/store';

test('renders App', () => {
  const { container } = render(<Provider store={store}>(<App /></Provider>);
  expect(container).toMatchSnapshot();
  expect(container).toBeTruthy();
});

test('rend', () =>{
  const { container } = render(<Provider store={store}>(<HeaderComponent/></Provider>);
  expect(container).toMatchSnapshot();
})