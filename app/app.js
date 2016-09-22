// ES6 Component
// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './containers/app.container'

// Component Class
class App extends React.Component {
    // render method is most important
    // render method returns JSX template
    render() {
        return (
            <AppContainer />
        );
    }
}

// Render to ID content in the DOM
ReactDOM.render(
    <App/ >,
    document.getElementById('content')
);