import React from 'react';
import Image from 'next/image';

const MiniStar = () => {
  return (
    <div className="miniStar">
      <Image
        src="/images/star.svg"
        alt="star"
        width={0}
        height={0}
        style={
          {
            width: "15px",
            height: "auto",
            verticalAlign: "middle",
            margin: "20px auto",
            left: "0",
            right: "0"
          }
        }
      />
    </div>
  )
}

export default MiniStar;
