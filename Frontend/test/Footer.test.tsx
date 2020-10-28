import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from '../src/App';
import {FooterComponent} from '../src/components/FooterComponent/FooterComponent';
import {Provider} from 'react-redux';
import store from '../src/store/store';

test('renders App', () => {
    /*const { container } = render(<Provider store={store}>(<FooterComponent /></Provider>);
    expect(container).toMatchSnapshot();
    expect(container).toBeTruthy();*/

    const tree = renderer
        .create(<Provider store={store}>(<FooterComponent /></Provider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});