import React from 'react';
import Axios from 'axios';
import Random from 'random-js';

// Import components
import Header from '../components/header.component';
import LivestreamList from '../components/livestreamlist.component';

// AppContainer class
class AppContainer extends React.Component {
    // AppContainer constructor
    constructor(props) {
        super(props);

        this.state = {
            livestreams: [],
            count: 0,
            accessToken: ''
        }
        
        this.client_id = 'P4HLBSRW3XSPBSwo1jxd2sA1rCeq0qaBWFIXw8dd';
    }

    // componentDidMount lifecycle method. Called once a component is loaded
    componentDidMount() {
        this.refreshFeed();
    }

    getAccessToken(){
        return '';
    }

    refreshFeed(){
        console.log("In refreshFeed.");

        let _this = this;
        var config = {
            headers: {'Authorization': 'Bearer ' + this.getAccessToken()}
        };

        Axios.get('https://www.livecoding.tv:443/api/livestreams/onair/', config)
        .then(function(response){
            console.log(response.data.results);
            _this.setState({
                count: response.data.count,
                livestreams: response.data.results
            });
        })
        .catch(function(err){
            console.log(err);
        });
    }

    openSettings(){
        console.log("In openSettings.");

        let _this = this;

        var r = new Random(Random.engines.mt19937().autoSeed());
        var hex = r.hex(16);
        
        var url = "https://www.livecoding.tv/o/authorize?client_id=" + _this.client_id + "&state=" + hex + "&scope=read&response_type=token";
        console.log(url);
        // var authWindow = window.open(url);
        window.open("http://localhost", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
    }

    // Render method
    render () {
        return (
            <div className="onair">
                <Header
                count={this.state.count}
                openSettings={this.openSettings.bind(this)}
                refreshFeed={this.refreshFeed.bind(this)}/>
                <LivestreamList
                livestreams={this.state.livestreams}/>
            </div>
        );
    }
}

// Export AppContainer Component
export default AppContainer