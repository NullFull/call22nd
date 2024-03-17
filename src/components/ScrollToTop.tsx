import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ScrollToTop = (props: {link: string}) => {
  return (
    <Link href={props.link}>
      <Image
        src="/images/top.svg"
        alt="scrollToTop"
        width={0}
        height={0}
        style={
          {
            width: "50px",
            height: "auto",
            position: "fixed",
            bottom: "150px",
            right: "25px"
          }
        }
      />
    </Link>
  )
}

export default ScrollToTop;
