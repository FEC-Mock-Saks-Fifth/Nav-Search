import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
    this.handleAutocomplete = this.handleAutocomplete.bind(this);
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

  handleAutocomplete(item) {
    var regex = new RegExp(`^${this.state.value}|\\b${this.state.value}`, `i`)
    var autosearch = item.replace(regex, `<b>${this.state.value}</b>`)
    const text = {
      __html: autosearch
    };
    return (<p dangerouslySetInnerHTML={text}/>)
  }

  render() {
    return (
      <div className="joshSearchContainer">
        <div className ="joshSC2">
        <div className="joshBorderContainerSearch">
        <button className="joshSearchButton" style={{opacity: this.state.isFocused ? '1': '0.3'}}></button>
        <input type="text" placeholder="Search" value={this.state.value} onChange={(e) => this.handleChange(e)} onFocus={this.toggleFocus} onBlur={(e) => this.toggleFocus(e)} className="joshSearch" style={{width: this.state.isFocused ? '230px': '130px'}}></input>
        <button onClick={this.handleClear} className="joshClearButton" style={{display: this.state.isFocused ? 'block': 'none'}}></button>
        </div>
        {
          this.state.currentQuery.length ?
        <div className="joshAutoSearch">
        {
          this.state.currentQuery.map((item, index) => {
            return(
            <div key={index} className="joshQueryResult">
              {this.handleAutocomplete(item)}
            </div>
            )
          })
        }
        </div>
        :
        (null)
        }
        </div>
      </div>
    )
  }
}

export default SearchBar;