import React from 'react';

const styles = {
  width: '100%',
  maxWidth: '600px',
  margin: '0 auto',
  padding: '0 16px',
  boxSizing: 'border-box',
};

export default function ResponsiveContainer({ children, style = {}, className = '' }) {
  return (
    <div className={className} style={{ ...styles, ...style }}>
      {children}
    </div>
  );
}
