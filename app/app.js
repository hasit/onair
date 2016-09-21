// ES6 Component
// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Import components
import Header from './components/header.component';
import LivestreamList from './components/livestreamlist.component';

// Import 

// Component Class
class App extends React.Component {
    // render method is most important
    // render method returns JSX template
    render() {
        return (
            <div className="app">
                <Header />
                <LivestreamList />
            </div>
        );
    }
}

// Render to ID content in the DOM
ReactDOM.render(
    <App/ >,
    document.getElementById('content')
);