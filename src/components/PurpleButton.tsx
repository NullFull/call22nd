import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PurpleButton = (props: { link: string, message: string }) => {
  return (
    <button className="purpleButton shadow">
      <Link href={props.link}>
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
              marginRight: "5px"
            }
          }
        />
        <span className="message">{props.message}</span>
      </Link>
    </button>
  )
}

export default PurpleButton;
