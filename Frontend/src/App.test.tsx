import React from 'react';
import {render, screen} from '@testing-library/react';
import App from '../src/App';
import {HeaderComponent} from "./components/HeaderComponent/HeaderComponent";
import {Provider} from 'react-redux';
import store from '../src/store/store';
import {FooterComponent} from "./components/FooterComponent/FooterComponent";
import {SearchBarComponent} from "./components/SearchBarComponent/SearchComponent";
import {DropDownComponent} from "./components/DropDownComponent/DropDownComponent";
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

test('Test list of players', () => {
  const search = shallow(<Provider store={store}>(<SearchBarComponent /></Provider>);
  expect(search.find('.playersList'));
});

test('Render search bar component', () => {
  const searchBar = shallow(<Provider store={store}>(<SearchBarComponent /></Provider>);
  expect(searchBar).toBeTruthy();
});






