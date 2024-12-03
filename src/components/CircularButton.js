import React from 'react';

export function CircularButton({ onClick, children, isActive }) {
  return (
    <button
      onClick={onClick}
      className={`w-20 h-20 rounded-full bg-red-600 text-white font-bold flex items-center justify-center transition-all ${
        isActive ? 'bg-green-700' : 'hover:bg-red-700'
      }`
    }
    >
      {children}
    </button>
  );
}

