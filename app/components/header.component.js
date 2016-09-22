import React from 'react';

class Header extends React.Component {
  render(){
    return(
      <div className="header">
          <span className="heading">OnAir</span>
          <span className="icons">
            <i className="fa fa-refresh" onClick={this.props.refreshFeed}></i>
            <i className='fa fa-cog' onClick={this.props.openSettings}></i>
          </span>
      </div>
    )
  }

}

export default Header