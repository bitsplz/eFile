import React from 'react';

import './css/w3.css';
import './css/styles.css';
import './css/bootstrap.min.css';

const CustomButton = ({ children, ...otherProps }) => (
  <button style={{borderRadius:'40px'}} className="w3-button w3-green w3-padding-large w3-large w3-margin-top" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;