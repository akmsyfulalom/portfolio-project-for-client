import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';


const LoaderSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
      <ThreeCircles
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
      </div>
    </div>
  );
};

export default LoaderSpinner;

