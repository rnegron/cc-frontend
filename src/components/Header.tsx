import React from 'react';
import MovieStatusSelect from './MovieStatusSelect';
class Header extends React.Component {
  render() {
    return (
      <nav
        id="header"
        className="flex self-center w-full justify-between bg-gray-300 py-2 mb-2 mx-4 rounded"
      >
        <div className="text-gray-700 px-4 pt-2">CC Frontend</div>
        <MovieStatusSelect />
      </nav>
    );
  }
}

export default Header;
