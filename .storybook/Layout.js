import React from 'react';
import '../src/styles/tailwind.css';


const Layout = ({ children }) => {
  return (
    <div className="flex flex-col">
      {children}
    </div>
  )
}

export default Layout;
