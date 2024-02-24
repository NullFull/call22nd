import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WhiteButton = (props: {link: string, message: string}) => {
  return (
    <button className="whiteButton shadow">
      <Link href={props.link}>
        <Image
          src="/page.svg"
          alt="page"
          width={0}
          height={0}
          style={
            {
              width: "6vw",
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

export default WhiteButton;
