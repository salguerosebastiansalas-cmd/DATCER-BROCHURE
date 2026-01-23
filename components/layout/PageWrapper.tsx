import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, className = "" }) => {
  return (
    <div className={`w-full h-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-center ${className}`}>
      {children}
    </div>
  );
};

export default PageWrapper;