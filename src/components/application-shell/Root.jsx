import React from 'react';
import PropTypes from 'prop-types';

function Root({children}) {
  return (
    <div className="application-shell">
      {children}
    </div>
  );
}

Root.propTypes = {
  children: PropTypes.node.isRequired
};


export default Root;
