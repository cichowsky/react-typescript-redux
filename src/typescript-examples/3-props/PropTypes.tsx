/* eslint-disable react/destructuring-assignment */
/* There is no sense to use PropTypes when we use TypeScript */
/* TypeScript protect on development stage, PropTypes addictionally on runtime though */
/* So, it's not bad idea to use PropTypes with TypeScript when we create external library */
import React from 'react';
import PropTypes from 'prop-types';

const MoviePropTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.number,
  platforms: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

interface IMovieProps {
  title: string;
  duration?: number;
  platforms: string[];
}

const Movie = (props: IMovieProps) => {
  return (
    <div>
      {props.title} - {props.platforms}
      {props.duration && <span>{props.duration} minutes</span>}
    </div>
  );
};

Movie.propTypes = MoviePropTypes;
