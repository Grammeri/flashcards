import React from 'react';

import './index.css';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from 'App';
import { store } from 'store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
        ,
    </HashRouter>,
);
