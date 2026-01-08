import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, className = "" }) => {
  return (
    <div className={`w-full h-full max-w-[1200px] mx-auto px-5 md:px-12 flex flex-col justify-center overflow-y-auto md:overflow-hidden py-20 md:py-0 ${className}`}>
      {children}
    </div>
  );
};

export default PageWrapper;