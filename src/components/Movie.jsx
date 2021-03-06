import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../styles/styled-components';

const Movie = ({ id, poster_path }) => {
  return (
    <Card>
      <Link to={'/'+ id}><img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt='img not found'/></Link>
    </Card>
  )
}

export default Movie;
