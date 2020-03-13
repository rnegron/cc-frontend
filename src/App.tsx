import './styles/tailwind.css';

import React from 'react';

import { Header, Content, Footer } from './components';

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
