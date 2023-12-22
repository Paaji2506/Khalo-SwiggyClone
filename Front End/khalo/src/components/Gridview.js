import React from 'react';

const GridView = ({ children }) => {
  return (
    <div className="grid-view">
      <div className="grid-container">
        {React.Children.map(children, (child, index) => (
          <div key={index} className="grid-item">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridView;