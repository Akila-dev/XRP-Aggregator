import React from "react";

const NeonGradientIcon = ({ icon }) => {
  return (
    <svg width="1em" height="1em">
      <linearGradient id="neon-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
        <stop stopColor="var(--neon-from)" offset="0%" />
        <stop stopColor="var(--neon-via)" offset="50%" />
        <stop stopColor="var(--neon-to)" offset="100%" />
      </linearGradient>

      {icon}
    </svg>
  );
};

export default NeonGradientIcon;
