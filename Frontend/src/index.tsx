import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Sstore from './store/store';

const { Provider } = require('react-redux');

ReactDOM.render(
  <React.StrictMode>
      <Provider store={Sstore}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
