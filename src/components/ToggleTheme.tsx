import React from 'react';

type Props = {
  onClick?: React.MouseEventHandler;
};

const ToggleTheme = ({ onClick }: Props) => {
  return (
    <button className='toggleBtn' onClick={onClick}>
      <div className='toggleBtn--ellipse'>
        <div className='toggleBtn--dots'>
          {Object.keys([...Array(8)]).map((dot) => (
            <span className='toggleBtn--dot' key={dot} />
          ))}
        </div>
      </div>
    </button>
  );
};

export default ToggleTheme;
