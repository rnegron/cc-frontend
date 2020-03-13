import React from 'react';

class MovieStatusSelect extends React.Component {
  render() {
    return (
      <select className="bg-white border border-gray-400 hover:border-gray-500 text-gray-700 px-4 py-2 mr-4 rounded shadow leading-tight">
        <option value="now">Now Showing</option>
        <option value="soon">Coming Soon</option>
      </select>
    );
  }
}

export default MovieStatusSelect;
