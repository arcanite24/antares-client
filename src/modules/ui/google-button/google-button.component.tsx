import React from 'react';

type Props = {
  onClick: () => void;
  loading?: boolean;
};

export const GoogleButton: React.FC<Props> = ({ onClick, loading }) => {
  return (
    <button
      onClick={() => onClick()}
      className="w-full border flex flex-row items-center justify-center text-sm rounded py-4 disabled:opacity-50 disabled:cursor-not-allowed"
      style={{ border: '1px solid white', position: 'relative' }}
      disabled={loading}
    >
      {loading && (
        <div className="absolute flex justify-end w-full">
          <img
            src="https://samherbert.net/svg-loaders/svg-loaders/oval.svg"
            style={{
              width: '16px',
              marginRight: '0.5rem',
            }}
          />
        </div>
      )}
      <img src="/img/google.svg" alt="" style={{ width: '16px' }} />
      <span className="ml-4">Sign in with Google</span>
    </button>
  );
};
