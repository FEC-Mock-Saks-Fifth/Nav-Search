import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

let searchGlass ='http://clipart-library.com/images_k/magnifying-glass-icon-transparent/magnifying-glass-icon-transparent-19.png';
let clearIcon = 'https://www.pngix.com/pngfile/big/533-5334187_png-file-svg-close-x-icon-png-transparent.png';

const SearchContainer = styled.div`
padding: 30px;
height: 20px;
display: flex;
justify-content: center;
align-items: center;
`;

const BorderContainer = styled.div`
height: 40px;
width: fit-content(100%);
display: flex;
justify-content: center;
align-items: center;
border: 0.2px solid ${props => props.borderColor};
padding: 0px 7px 0px 5px;
`;

const SearchButton = styled.button`
height: 30px;
width: 30px;
border: none;
opacity: ${props => props.isFocused ? `1;`: `0.3;`}
background-image: url(${props => props.imageUrl});
background-size: contain;
background-repeat: no-repeat;
`

const ClearButton = styled.button`
height: 15px;
width: 15px;
border: none;
display: ${props => props.isFocused ? `block;`: `none;`}
background-image: url(${props => props.imageUrl});
background-size: contain;
background-repeat: no-repeat;
`

const Search = styled.input`
height: 30px;
width: ${props => props.isFocused ? `230px;`: `130px;`}
border: none;
transition: all 0.3s
outline:0;
`;

class SearchBar extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      isFocused: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.toggleFocus = this.toggleFocus.bind(this);
  }

  toggleFocus(e) {
    if (this.state.isFocused === true) {
      setTimeout(() => {
        this.setState({
          isFocused: !this.state.isFocused
        }, this.handleClear)
      }, 200)
    } else {
      setTimeout(() => {
        this.setState({
          isFocused: !this.state.isFocused
        })
      }, 200)
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleClear() {
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <SearchContainer>
        <BorderContainer isFocused={this.state.isFocused} borderColor={this.props.borderColor}>
        <SearchButton imageUrl={searchGlass} isFocused={this.state.isFocused}></SearchButton>
        <Search type="text" placeholder="Search" value={this.state.value} onChange={(e) => this.handleChange(e)} onFocus={this.toggleFocus} onBlur={(e) => this.toggleFocus(e)} isFocused={this.state.isFocused}></Search>
        <ClearButton imageUrl={clearIcon} isFocused={this.state.isFocused} onClick={this.handleClear}></ClearButton>
        </BorderContainer>
      </SearchContainer>
    )
  }
}

export default SearchBar;