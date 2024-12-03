import React from 'react';

export function CircularButton({ onClick, children, isActive }) {
  return (
    <div clasName="flex items-center mr-2 bg-slate-100">
        <div className="flex items-center mb-4 p-1 bg-neutral-600 rounded-md">
            <button
                onClick={onClick}
                className={`w-16 h-16 bg-gray-700 rounded-md p-1 mr-4 transition-all ${
                isActive ? 'bg-green-700' : 'hover:bg-gray-600'
                }`}
            >
                <div className={`w-full h-full rounded-md flex items-center justify-center ${
                isActive ? 'bg-green-500' : 'bg-red-600 hover:bg-red-700'
                }`}>
                {/* {children.charAt(0)} */}
                </div>
            </button>
        <span className="text-lg">{children}</span>
        </div>
    </div>
    
  );
}

