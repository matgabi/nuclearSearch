/**
 * Created by gabrielmatasariu on 8/1/2016.
 */

// Application entrypoint.

// Load up the application styles
//require("../styles/main.css");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import reactor from './reactor';
import SearchStore from './stores/SearchStore';
import DirectoriesStore from './stores/DirectoriesStore';

reactor.registerStores({
    search: SearchStore,
    directories: DirectoriesStore
});

ReactDOM.render(<App />, document.getElementById('container'));
