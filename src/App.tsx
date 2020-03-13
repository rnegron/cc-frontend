import './styles/tailwind.css';

import React from 'react';

import { Header, Content, Footer } from './components';

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
