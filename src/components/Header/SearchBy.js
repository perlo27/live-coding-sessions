import React from 'react';
import PropTypes from 'prop-types';

import './header.css';
import {sortOptions} from './index'


const SearchBy = ({handleSortChange, sort}) => (
  <div>
    <p
      className={`sort ${sort === sortOptions.title ? 'active' : ''}`}
      onClick={handleSortChange(sortOptions.title)}
    >
      TITLE
    </p>
    <p
      className={`sort ${sort === sortOptions.genre ? 'active' : ''}`}
      onClick={handleSortChange(sortOptions.genre)}
    >
      GENRE
    </p>
  </div>
);

SearchBy.propTypes = {
  sort: PropTypes.string.isRequired,
  handleSortChange: PropTypes.func.isRequired,
};

export default SearchBy;