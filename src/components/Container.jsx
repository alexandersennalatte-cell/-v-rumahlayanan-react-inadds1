import React from 'react';

const Container = ({ children, className = '', as: Comp = 'div', ...rest }) => (
  <Comp className={`container ${className}`.trim()} {...rest}>
    {children}
  </Comp>
);

export default Container;
