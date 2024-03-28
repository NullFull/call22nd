import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PurpleButton = (props: { link: string, message: string, download?: boolean }) => {
  const downloadProps = props.download ? { download: true, target: '_blank', rel: 'noreferrer' } : {};
  return (
    <Link href={props.link} className="purpleButton shadow" {...downloadProps}>
      <Image
        src="/images/star.svg"
        alt="star"
        width={16}
        height={17}
        style={
          {
            verticalAlign: "middle",
            marginRight: "5px"
          }
        }
      />
      <span className="medium message">{props.message}</span>
    </Link>
  )
}

export default PurpleButton;
