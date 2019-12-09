import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';

let searchGlass ='http://clipart-library.com/images_k/magnifying-glass-icon-transparent/magnifying-glass-icon-transparent-19.png';
let clearIcon = 'https://www.pngix.com/pngfile/big/533-5334187_png-file-svg-close-x-icon-png-transparent.png';

const SearchContainer = styled.div`
font-family: ${props => props.font};
font-size: 14px;
padding: 30px 30px 30px 30px;
height: 20px;
display: inline-block;
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

const AutoSearch = styled.div`
position: absolute;
display: flex;
height: fit-content(100%);
width: 100%;
background: #F5F5F5;
z-index: 1;
border: 0.2px solid ${props => props.borderColor};
justify-content: center;
flex-direction: column;
`;

const SC2 = styled.div`
position: relative;
height: fit-content(100%);
width: fit-content(100%);
display: inline-block;
bottom: 11px;
`;

const QueryResult = styled.div`
display: flex;
height: 40px;
width: 70%;
padding: 5px;
align-items: center;
&:hover{
  cursor: pointer;
  text-decoration: underline;
  font-weight: bold;
}
`;


class SearchBar extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      isFocused: false,
      currentQuery: [],
      queryExists: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.toggleFocus = this.toggleFocus.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.filterUniqueSearchResults = this.filterUniqueSearchResults.bind(this);
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

  //query is executed upon each key press
  handleChange(e) {
    this.setState({
      value: e.target.value
    }, () => {
      if (this.state.value) {
        this.handleSearch(this.state.value);
      } else {
        this.handleClear();
      }
    })
  }

  handleClear() {
    this.setState({
      value: '',
      currentQuery: []
    })
  }

  filterUniqueSearchResults(data) {
    var resultArr = [];
    data = data.data;
    data.forEach((item, index) => {
      if (!resultArr.includes(item.name)) {
        resultArr.push(item.name);
      }
    })
    return resultArr;
  }

  handleSearch(query) {
    if (query.length) {
      axios.get('http://localhost:3000/autosearch', {
        params: {
          'data': query
        }
      })
      .then((data) => {
        var filteredQuery = this.filterUniqueSearchResults(data);
        this.setState({
          currentQuery: filteredQuery
        }, () => {
        })
      })
      .catch((err) => {
        console.error(err);
      })
    }
  }

  render() {
    return (
      <SearchContainer font={this.props.font}>
        <SC2>
        <BorderContainer isFocused={this.state.isFocused} borderColor={this.props.borderColor}>
        <SearchButton imageUrl={searchGlass} isFocused={this.state.isFocused}></SearchButton>
        <Search type="text" placeholder="Search" value={this.state.value} onChange={(e) => this.handleChange(e)} onFocus={this.toggleFocus} onBlur={(e) => this.toggleFocus(e)} isFocused={this.state.isFocused}></Search>
        <ClearButton imageUrl={clearIcon} isFocused={this.state.isFocused} onClick={this.handleClear}></ClearButton>
        </BorderContainer>
        {
          this.state.isFocused ?
        <AutoSearch borderColor={this.props.borderColor}>
        {
          this.state.currentQuery.map((item, index) => {
            return(
            <QueryResult font={this.props.font} key={index}>
              {item}
            </QueryResult>
            )
          })
        }
        </AutoSearch>
        :
        (null)
        }
        </SC2>
      </SearchContainer>
    )
  }
}

export default SearchBar;