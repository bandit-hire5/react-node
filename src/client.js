import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import DevTools from './components/DevTools';

const initialState = window.REDUX_INITIAL_STATE || {};

const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('react-view')
);

ReactDOM.render(<DevTools store={store} />, document.getElementById('dev-tools'));