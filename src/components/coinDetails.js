import { useLocation, Link } from 'react-router-dom';
import React from 'react';

const coinDetails = () => {
  const location = useLocation();
  const { state } = location;

  console.log(state);

  return (
    <div>
      <Link to="/">
        <i className="fa fa-arrow-circle-o-left" />
      </Link>
      <p>hellpoooo</p>
    </div>
  );
};

export default coinDetails;
