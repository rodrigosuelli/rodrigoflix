import React from 'react';

function ButtonLink(props) {
  const { children, className, href } = props;

  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}

export default ButtonLink;
