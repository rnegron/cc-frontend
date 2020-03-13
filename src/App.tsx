import './styles/tailwind.css';

import React, { useState } from 'react';

import { Header, Content, Footer } from './components';
import { NOW_SHOWING } from './constants';

function App() {
  const [movieStatus, setMovieStatus] = useState(NOW_SHOWING);

  return (
    <div className="flex flex-col">
      <Header setMovieStatus={setMovieStatus} />
      <Content movieStatus={movieStatus} />
      <Footer />
    </div>
  );
}

export default App;
