import Link from 'next/link';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const CustomLink = ({ children, className = '', onClick = null, href = '/', ...props }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={twMerge(`text-text-lite ${className}`)}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
