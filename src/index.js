import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './store/FirebaseContext';
import Context from './store/FirebaseContext'
import firebase from './Firebase/Config';
import { SearchProvider } from './store/SearchContext';


ReactDOM.render(
    <SearchProvider>
    <FirebaseContext.Provider value={{ firebase }}>
        <Context>
            <App />
        </Context>
    </FirebaseContext.Provider>
    </SearchProvider>,
    document.getElementById('root'));
