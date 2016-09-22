import React from 'react';
import Livestream from '../components/livestream.component';

class LivestreamList extends React.Component {
    render(){
        var livestreams = [
            {
                embed_url: "#",
                thumbnail_url: "http://placekitten.com/250/140",
                user__slug: "Blah1",
                title: "What is blah1?",
                tags: "one, two, three",
                is_live: true
            },
            {
                embed_url: "#",
                thumbnail_url: "http://placekitten.com/250/140",
                user__slug: "Blah2",
                title: "Who is blah2?",
                tags: "four, five, six",
                is_live: false
            },
            {
                embed_url: "#",
                thumbnail_url: "http://placekitten.com/250/140",
                user__slug: "Blah3",
                title: "How is blah3?",
                tags: "seven, eight, nine",
                is_live: true
            }
        ];
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