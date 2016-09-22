import React from 'react';

class Livestream extends React.Component {
    render(){
        return(
            <a className="stream-link" href={this.props.embed_url}>
                <div className="stream-data">
                    <img className="stream-thumbnail" src={this.props.thumbnail_url}/>
                    <div className="stream-text">
                        <ul>
                            <li><i className={this.props.is_live ? "fa fa-circle" : "fa fa-circle-thin" }></i> {this.props.user__slug}</li>
                            <li>{this.props.title}</li>
                            <li>{this.props.tags}</li>
                        </ul>
                    </div>
                </div>
            </a>
        )
    }
}

export default Livestream