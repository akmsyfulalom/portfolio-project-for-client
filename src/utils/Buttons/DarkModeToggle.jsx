import React from 'react';

const DarkModeToggle = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark-mode');
  };

  return (
    <button
      className=" bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-4 py-2 rounded-md"
      onClick={toggleDarkMode}
    >
      Toggle Theme
    </button>
  );
};

export default DarkModeToggle;
