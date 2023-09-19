import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-8">
        </div>
        <div className="mt-1 text-center">
          <p className="text-primary">
            © {new Date().getFullYear()} Uduscode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
