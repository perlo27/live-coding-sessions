import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBy from './SearchBy';

export const sortOptions = {
  title: 'title',
  genre: 'genre'
};

class Header extends Component {

  state = {
    inputValue: '',
    sort: sortOptions.title
  };

  handleInputChange = e => this.setState({inputValue: e.target.value});
  handleSortChange = sortOption => () => this.setState({sort: sortOption});


  render() {
    return (
      <div>
        <h3>FInd your movie</h3>
        <input type="text" value={this.state.inputValue} onChange={this.handleInputChange}/>
        <div className="search-buttons-wrapper">
          <SearchBy sort={this.state.sort} handleSortChange={this.handleSortChange}/>
          <button>search</button>
        </div>

      </div>
    );
  }
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;