import React from "react";

const CircularProgressBar = ({ percent , size = 3, strokeWidth = 0.25, stockeColor='green'}) => {
  const radius = size / 2 - strokeWidth;
  return (
    <div>
      <svg width={`${size}vw`} height={`${size}vw`}>
        <circle
          r={`${radius}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
          stroke= 'white'
          strokeWidth={`${strokeWidth}vw`}
        ></circle>
        <circle
          r={`${radius}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
          stroke={stockeColor}
          fill="none"
          strokeWidth={`${strokeWidth}vw`}
          strokeDasharray={`${2 * Math.PI * radius}vw`} // dash => 1px dash| gap 1 | dash | gap
          //  2*PI*R => chu vi => 2 * 20 * 3.14 = 125,6
          strokeDashoffset={`${2 * Math.PI * radius - (percent / 100) * (2 * Math.PI * radius)}vw`}
          transform="rotate(-90)"
          style={{ transformOrigin: "center" }}
          strokeLinecap="round"
        ></circle>
        <text
          x={`${size/2}vw`}
          y={`${size/2}vw`}
          fill="white"
          fontSize="1vw"
          alignmentBaseline="middle"
          textAnchor="middle"
        >
          {percent}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
