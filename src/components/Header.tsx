import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <nav
        id="header"
        className="flex justify-center bg-gray-400 py-2 my-2 mx-4 rounded"
      >
        <div className="text-gray-700 px-4 pt-2">CC Frontend</div>
      </nav>
    );
  }
}

export default Header;
