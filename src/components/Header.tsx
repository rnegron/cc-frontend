import React from 'react';

import MovieStatusSelect from './MovieStatusSelect';
import { setMovieStatusType } from '../types';

const Header = ({ setMovieStatus }: setMovieStatusType) => {
  return (
    <nav
      id="header"
      className="flex self-center w-full justify-between bg-gray-300 py-2 mb-2 mx-4 rounded"
    >
      <div className="text-gray-700 px-4 pt-2">CC Frontend</div>
      <MovieStatusSelect setMovieStatus={setMovieStatus} />
    </nav>
  );
};

export default Header;
