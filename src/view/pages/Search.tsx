import React from 'react';
import { Link, useHistory } from 'react-router-dom';

interface Props {}

export const Search = (props: Props) => {
  const history = useHistory();

  return (
    <div>
      Search
      <Link to="/weather/london">Weather</Link>
    </div>
  );
};
