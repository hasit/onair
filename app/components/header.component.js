import React from 'react';

class Header extends React.Component {
  render(){
    return(
      <div className="header">
        <h1>OnAir</h1>
        <i className="fa fa-refresh fa-2x" onClick={this.props.refreshFeed}></i> 
        <i className='fa fa-cog fa-2x' onClick={this.props.openSettings}></i>
      </div>
    )
  }

}

export default Header