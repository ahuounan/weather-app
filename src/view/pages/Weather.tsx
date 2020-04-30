import React from 'react';
import { Link, useParams } from 'react-router-dom';

interface Props {}

export const Weather = (props: Props) => {
  const { location } = useParams();
  return (
    <div>
      Weather
      {location}
      <Link to="/search">Search</Link>
    </div>
  );
};
