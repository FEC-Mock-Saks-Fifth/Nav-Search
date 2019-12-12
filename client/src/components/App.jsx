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
    let borderColor = `#B8B8B8`
    let font = 'Source Sans Pro, sans-serif'
    return (
      <nav>
        <PromoBar/>
        <div className="joshSearchCatContainer">
          <LogoSearchBar/>
          <CategoryBar borderColor={borderColor} font={font}/>
        </div>
      </nav>
    )
  }
}

export default App;