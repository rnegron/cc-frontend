import React from 'react';

import { setMovieStatusType } from '../types';
import { NOW_SHOWING, COMING_SOON } from '../constants';

const MovieStatusSelect = ({ setMovieStatus }: setMovieStatusType) => {
  return (
    <select
      onChange={(e) => setMovieStatus(e.target.value)}
      className="bg-white border border-gray-400 hover:border-gray-500 text-gray-700 px-4 py-2 mr-4 rounded shadow leading-tight"
    >
      <option value={`${NOW_SHOWING}`}>Now Showing</option>
      <option value={`${COMING_SOON}`}>Coming Soon</option>
    </select>
  );
};

export default MovieStatusSelect;
