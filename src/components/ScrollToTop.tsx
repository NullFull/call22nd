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
  const [right, setRight] = useState(25);

  useEffect(() => {
    setRight((Number(width.width) - 360) / 2 + 25)
    console.log(right)
  }, [width, right])

  return (
    <Link href={props.link}>
      <Image
        src="/images/top.svg"
        alt="scrollToTop"
        width={52}
        height={52}
        style={
          {
            position: "fixed",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 20px 5px",
            borderRadius: "50%",
            left: "auto",
            right: `${right}px`,
            bottom: "150px",
          }
        }
      />
    </Link>
  )
}

export default ScrollToTop;
