import React from 'react';
import ReactDOM from 'react-dom';
import PromoBar from './PromoBar.jsx';
import LogoSearchBar from './LogoSearchBar.jsx';
import CategoryBar from './CategoryBar.jsx';

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <nav>
        <PromoBar/>
        <div className="joshSearchCatContainer">
          <LogoSearchBar/>
          <CategoryBar/>
        </div>
      </nav>
    )
  }
}

export default App;