import React from 'react';
import Link from 'next/link';

const WhiteButton = (props: {link: string, message: string}) => {
  return (
    <button className="whiteButton whiteButtonTitle shadow">
      <Link href={props.link}>
        <span className="message">{props.message}</span>
      </Link>
    </button>
  )
}

export default WhiteButton;
