import React from 'react';

const GlassCard = ({ children, className = '', onClick }) => {
  return (
    <div
      className={`glass-card rounded-xl border border-primary/20 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default GlassCard;
