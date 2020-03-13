import React from 'react';

import GithubLogo from '../images/github-logo.png';

class Footer extends React.Component {
  render() {
    return (
      <nav
        id="footer"
        className="flex justify-center bg-gray-400 py-3 my-2 mx-4 rounded"
      >
        <span className="flex flex-col items-center text-gray-700">
          <p className="py-2">Source </p>
          <a
            href="https://github.com/rnegron/cc-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="self-center pb-1"
              src={GithubLogo}
              alt="Github Logo"
            />
          </a>
        </span>
      </nav>
    );
  }
}

export default Footer;
