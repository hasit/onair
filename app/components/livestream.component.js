import React from 'react';

// href={this.props.embed_url} target="_blank"

class Livestream extends React.Component {
    openStream(url){
        window.open(url, "_blank", "menubar=yes,toolbar=yes,scrollbars=yes,resizable=yes,width=800,height=600");
    }
    render(){
        return(
            <div className="stream-data" onClick={this.openStream.bind(this, this.props.embed_url)}>
                <img className="stream-thumbnail" src={this.props.thumbnail_url}/>
                <div className="stream-text">
                    <ul>
                        <li><i className={this.props.is_live ? "fa fa-circle" : "fa fa-circle-thin" }></i> {this.props.user__slug} - {this.props.title}</li>
                        <li>Category - {this.props.coding_category}</li>
                        <li>Tags - {this.props.tags}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Livestream