import React from 'react';

class Livestream extends React.Component {
    render(){
        return(
            <div className="livestream">
                <a href={this.props.embed_url}>
                    <div className="stream-image">
                        <img src={this.props.thumbnail_url}/>
                    </div>
                    <div className="stream-data">
                        <span className={this.props.is_live ? "fa fa-circle" : "fa fa-circle-thin" }></span>
                        <span className="stream-user">{this.props.user__slug}</span>
                        <span className="stream-title">{this.props.title}</span>
                        <span className="stream-tags">{this.props.tags}</span>
                    </div>
                </a>
            </div>
        )
    }
}

export default Livestream