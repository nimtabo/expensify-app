import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    404
    Page not found. 
    <p><Link to="/">Go Back Home</Link></p>
  </div>
);

export default NotFoundPage;