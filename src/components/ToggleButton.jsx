import React, { useState } from 'react';

const ToggleButton = ({ onToggle }) => {
  const [enabled, setEnabled] = useState(false);

  const handleToggle = () => {
    setEnabled(!enabled);
    onToggle(!enabled); // Pass the new state to the parent
  };

  return (
    <button
      onClick={handleToggle}
      className={`relative w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${
        enabled ? 'bg-green-500' : 'bg-gray-300'
      }`}
    >
      <div
        className={`transform rounded-full w-6 h-6 bg-white shadow-md transition-transform duration-300 ease-in-out ${
          enabled ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
    </button>
  );
};

export default ToggleButton;


