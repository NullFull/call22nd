import Image from "next/image";

export default function Logo() {
  return (
    <div className="logoImage">
      <Image src="/images/speaker.webp" alt="" fill priority />
      <CircularText />
    </div>
  )
}

function CircularText() {
  const degreeToRadian = (angle: number) => {
    return angle * (Math.PI / 180);
  };
  
  const radius = 30;
  const diameter = radius * 2;
  const characters = 'Call 22'.split('');
  const deltaAngle = 120 / characters.length;
  const characterOffsetAngle = 0;
  let currentAngle = -90;

  return (
    <div id='circle' style={{ width: `${diameter}px`, height: `${diameter}px` }}>
      {characters.map((character, index) => {
        const xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle)));
        const yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle)));
        currentAngle += deltaAngle;
        return (<span key={index} style={{ transform: `translate(${xPos}px, ${yPos}px) rotate(${(index * deltaAngle) + characterOffsetAngle}deg)`}}>{character}</span>)
      })}
    </div>
  )
}