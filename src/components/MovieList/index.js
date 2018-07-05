import React, { Component } from 'react';
import {connect} from 'react-redux';

import {loadMovies} from '../../actions/movies';

import PropTypes from 'prop-types';


class MovieList extends Component {


  componentDidMount() {
    this.props.loadMovies({url: '/movies'});
  }

  render() {
    console.log('qiueqwiue-', this.props);
    return (
      <div>
        {this.props.data.map(({id, title, tagline, poster_path, release_date}) => (
          <div className="movie-card" key={id}>
            <img src={poster_path} />
            <span>
              <h6>{title}</h6>
              <p>{release_date}</p>
            </span>
            <p>{tagline}</p>
          </div>
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }))

};
MovieList.defaultProps = {
  data: []
};

export default connect(({movies}) => ({
  data: movies.data.data
}), {loadMovies})(MovieList);