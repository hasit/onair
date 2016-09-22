import React from 'react';
import Livestream from '../components/livestream.component';

class LivestreamList extends React.Component {
    render(){
        var livestreams = this.props.livestreams;
        var livestreamList = livestreams.map(function(livestream, i){
            return <Livestream key={i} embed_url={livestream.embed_url} thumbnail_url={livestream.thumbnail_url} user__slug={livestream.user__slug} title={livestream.title} tags={livestream.tags} is_live={livestream.is_live} />
        })

        return(
            <div className="list">
                {livestreamList}
            </div>
        )
    }
}

export default LivestreamList