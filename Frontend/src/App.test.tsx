import React from 'react';
import {render, screen} from '@testing-library/react';
import App from '../src/App';
import {HeaderComponent} from "./components/HeaderComponent/HeaderComponent";
import {Provider} from 'react-redux';
import store from '../src/store/store';
import {FrontPageComponent} from "./components/FrontPageComponent/FrontPageComponent";
import {SearchBarComponent} from "./components/SearchBarComponent/SearchComponent";
import {PopUp} from "./components/popup";
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';


Enzyme.configure({adapter: new Adapter()});

test('Renders App', () => {
  const { container } = render(<Provider store={store}>(<App /></Provider>);
  expect(container).toBeTruthy();
});

test('Renders header', () =>{
  const { container } = render(<Provider store={store}>(<HeaderComponent/></Provider>);
  expect(screen.getByText(/Premier League/i)).toBeTruthy();
  expect(container).toBeTruthy();
});

test('Renders search', () => {
  const { container } = render(<Provider store={store}>(<FrontPageComponent /></Provider>);
  expect(screen.getByText('Search')).toBeTruthy();
  expect(container).toBeTruthy();
});

test('Test list of players', () => {
  const search = shallow(<Provider store={store}>(<SearchBarComponent /></Provider>);
  //expect(search.find(PopUp)).toBe(true);
  expect(search.contains('.playersList')).toBe(true);
});

