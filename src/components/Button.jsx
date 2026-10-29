import React from 'react';

const Button = ({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  ...rest
}) => {
  const cls = ['btn', `btn--${variant}`, size !== 'md' ? `btn--${size}` : '', className]
    .filter(Boolean)
    .join(' ');
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  );
};

export default Button;
