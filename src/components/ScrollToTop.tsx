'use client'

import React from 'react'
import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

function getWindowWidth() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}

function useWindowWidth() {
  const [width, setWidth] = useState(getWindowWidth());

  useEffect(() => {
    function handleResize() {
      const width = getWindowWidth();
      setWidth(width);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

const ScrollToTop = (props: { link: string }) => {
  const width = useWindowWidth();

  return (
    <Link href={props.link}>
      <Image
        src="/images/top.svg"
        alt="scrollToTop"
        width={52}
        height={52}
        style={
          {
            height: "auto",
            position: "fixed",
            bottom: "150px",
            border: "1px solid #ffffff",
            borderRadius: "26px",
            right: `${(Number(width) - 360) / 2 + 25}px`
          }
        }
      />
    </Link>
  )
}

export default ScrollToTop;
