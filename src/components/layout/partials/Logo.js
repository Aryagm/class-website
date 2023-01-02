import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="pt-12">
        <Link to="/">
          <Image
            src={'https://i.ibb.co/Tgngj6n/319331358-5951408978242499-4793591395877404024-n.jpg'}
            alt="Open"
            width={200} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;