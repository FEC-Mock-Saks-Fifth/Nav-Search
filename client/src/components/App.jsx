import React from 'react';
import ReactDOM from 'react-dom';
import PromoBar from './PromoBar.jsx';
import LogoSearchBar from './LogoSearchBar.jsx';
import CategoryBar from './CategoryBar.jsx';
import styled from 'styled-components';

const SearchCatContainer = styled.div`
margin-top: 35px;
`;

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let borderColor = `#B8B8B8`
    let font = 'Source Sans Pro, sans-serif'
    return (
      <nav>
        <PromoBar font={font}/>
        <SearchCatContainer>
          <LogoSearchBar borderColor={borderColor} font={font}/>
          <CategoryBar borderColor={borderColor} font={font}/>
        </SearchCatContainer>
      </nav>
    )
  }
}

export default App;