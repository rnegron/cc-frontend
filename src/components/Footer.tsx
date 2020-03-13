import React from 'react';

import GithubLogo from '../images/github-logo.png';

class Footer extends React.Component {
  render() {
    return (
      <nav
        id="footer"
        className="self-center shadow-sm w-full bg-gray-300 py-3 my-2 mx-4 rounded"
      >
        <span className="flex flex-col align-center items-center text-gray-700">
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
