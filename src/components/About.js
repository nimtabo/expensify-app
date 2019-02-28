import React from 'react';

const AboutPage = () => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h2 className="page-header__title">Developer: Nicholas Mtabo</h2>
        <p>nicholasmtabo@yahoo.com</p>
        <p>+254 704 643 061</p>
      </div>
    </div>

    <div className="content-container">
      <img className="image__item" src="/images/about/react.png" alt="React" title="React" />
      <img className="image__item" src="/images/about/redux.png" alt="Redux" title="Redux" />
      <img className="image__item" src="/images/about/node.png" alt="Node.js" title="Nodejs" />
      <img className="image__item" src="/images/about/sasss.png" alt="Sass" title="Sass" />
      <img className="image__item" src="/images/about/firebase.png" alt="firebase" title="firebase" />
      <img className="image__item" src="/images/about/webpack.png" alt="webpack" title="webpack" />
      <img className="image__item" src="/images/about/jestenzyme.jpg" alt="jest-enzyme" title="jest-enzyme" />
    </div>
  </div>
);

export default AboutPage;