import React from 'react';

interface CloseButtonProps {
  toggleTrueFalse: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ toggleTrueFalse }) => {
  return (
    <div className="close flex justify-end md:hidden">
      <button
        className="w-16 transition duration-300 ease-in-out hover:bg-gray-300 hover:shadow-inner rounded-md"
        onClick={toggleTrueFalse}
      >
        <svg
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default CloseButton;
