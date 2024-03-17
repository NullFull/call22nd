import React from 'react';

const WhiteButtonTitle = (props: {message: string}) => {
  return (
    <button className="whiteButton whiteButtonTitle shadow">
      <span className="message">{props.message}</span>
    </button>
  )
}

export default WhiteButtonTitle;
