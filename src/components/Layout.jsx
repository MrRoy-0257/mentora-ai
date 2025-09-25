import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 font-sans">
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-blue-700">🎓 Mentora AI</h1>
        <span className="text-sm text-gray-500 hidden sm:inline">Your AI-Powered Study Assistant</span>
      </header>
      <main className="max-w-4xl mx-auto py-8 px-4">
        {children}
      </main>

      <footer className="text-center py-4 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Mentora AI • All rights reserved
      </footer>
    </div>
  );
};

export default Layout;
