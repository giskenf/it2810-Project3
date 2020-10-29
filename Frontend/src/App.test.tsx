import React from 'react';
import {render, screen} from '@testing-library/react';
import App from '../src/App';
import {HeaderComponent} from "./components/HeaderComponent/HeaderComponent";
import {Provider} from 'react-redux';
import store from '../src/store/store';
import {FooterComponent} from "./components/FooterComponent/FooterComponent";
import {FrontPageComponent} from "./components/FrontPageComponent/FrontPageComponent";

test('Renders App', () => {
  const { container } = render(<Provider store={store}>(<App /></Provider>);
  expect(container).toBeTruthy();
});

test('Renders header', () =>{
  const { container } = render(<Provider store={store}>(<HeaderComponent/></Provider>);
  expect(screen.getByText('Premier League')).toBeTruthy();
  expect(container).toBeTruthy();
});

test('Renders search', () => {
  const { container } = render(<Provider store={store}>(<FrontPageComponent /></Provider>);
  expect(screen.getByText('Search')).toBeTruthy();
  expect(container).toBeTruthy();
});