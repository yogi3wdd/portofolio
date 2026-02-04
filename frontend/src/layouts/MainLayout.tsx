import React from 'react';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen bg-black">
      {children}
    </div>
  );
};