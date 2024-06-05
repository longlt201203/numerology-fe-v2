// src/components/Typography.tsx
import React from 'react';

type TypographyProps = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'quote';
  className?: string;
  children: React.ReactNode;
};

const Typography: React.FC<TypographyProps> = ({ variant, className = '', children }) => {
  const baseStyles = {
    h1: 'font-playfair text-4xl mb-4',
    h2: 'font-playfair text-3xl mb-3',
    h3: 'font-playfair text-2xl mb-2',
    h4: 'font-playfair text-xl mb-2',
    h5: 'font-playfair text-lg mb-1',
    h6: 'font-playfair text-base mb-1',
    body: 'font-roboto text-base mb-2',
    quote: 'font-greatvibes text-xl italic',
  };

  const Component = variant as keyof JSX.IntrinsicElements;

  return (
    <Component className={`${baseStyles[variant]} ${className}`}>
      {children}
    </Component>
  );
};

export default Typography;
