import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WhiteButton = (props: {link: string, message: string}) => {
  return (
    <button className="whiteButton shadow">
      <Link href={props.link}>
        <Image
          src="/images/page.svg"
          alt="page"
          width={0}
          height={0}
          style={
            {
              width: "22px",
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
