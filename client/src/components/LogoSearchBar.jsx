import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar.jsx';

class LogoSearchBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div font={this.props.font} className="joshMainContainer">
        <div className="joshSubContainer">
          <div className="joshSearchSignIn">
            <a href="#" className="joshShopIcon">
            </a>
            <a href="#" className="joshHeartIcon">
            </a>
            <SearchBar></SearchBar>
            <div className="joshShipToContainer">
              <a href="#" className="joshShipTo">
                Ship To
              </a>
              <a href="#" className="joshAmFlag">
              </a>
            </div>
            <div className="joshWelcomeContainer">
              <a href="#" className="joshWelcome">
                Welcome, Sign In
              </a>
            </div >
          </div>
        <div className="joshLogoContainer">
        </div>
        </div>
      </div>
    )
  }
}

export default LogoSearchBar;