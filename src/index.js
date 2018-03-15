import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Reducers
import reducers from './reducers';

const store = createStore(reducers);

ReactDOM.render(
    
    <Provider store={store}>
        <App />
    </Provider>
    
    , document.getElementById('root'));
