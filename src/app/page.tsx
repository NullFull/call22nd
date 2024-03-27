import Image from "next/image";

import "@/app/main.css"
import PurpleButton from "@/components/PurpleButton";
import WhiteButtonTitle from "@/components/WhiteButtonTitle";
import MiniStar from "@/components/MiniStar";
import Ask from "@/components/Ask";
import Stats from "@/components/Stats";
import Logo from "@/components/Logo";
// import Result from "@/components/Result";



export default function Home() {
  return (
    <div className="mainWrapper">
      <main className="main">
        <div className="header">
          <Logo />
          <span className="year">2024</span>
        </div>

        <PurpleButton
          link={"https://drive.google.com/file/d/10_qClL-HXUuJOZtV-m1LvvlWxf6eehw6/view?usp=sharing"}
          message={"콜22 캠페인 브로슈어 다운로드"}
        />
        <PurpleButton
          link={"#askSection"}
          message={"강간죄 개정 촉구하러 가기"}
        />

        <div className="title">
          <WhiteButtonTitle
            message={"콜22 총선 캠페인"}
          />
          <Image
            src="/images/bell.webp"
            alt="bell"
            width={80}
            height={87.5}
            priority
          />
          <Image
            src="/images/star.svg"
            alt="star"
            width={0}
            height={0}
            style={
              {
                width: "15px",
                height: "auto",
                display: "block",
                position: "absolute",
                top: "160px",
                left: "50px"
              }
            }
          />
          <Image
            src="/images/star.svg"
            alt="star"
            width={0}
            height={0}
            style={
              {
                width: "30px",
                height: "auto",
                display: "block",
                position: "absolute",
                top: "50px",
                right: "66px"
              }
            }
          />
        </div>

        <div className="message textarea">
          <p>
            강간죄 개정연대<br />
            #22nd
          </p>
          <MiniStar />
          <p>
            강간죄의 구성요건을<br />
            &apos;동의 여부&apos;로 바꾸고,<br />
            성평등 전담부처 강화에<br />
            함께할 우리 동네 국회의원 찾기!
          </p>
          <MiniStar />
          <Stats />
          <MiniStar />
          <p>
            클릭 한 번으로 &apos;성평등&apos;을 위한
            발걸음에 함께해주세요!
          </p>
        </div >

        {/* <div className="result">
          <Result />
        </div> */}

        <div className="worker" id="askSection">
          <Ask />
        </div>

        <div className="footer">
          <p className="contactText">Contact Us</p>
          <p className="contactEmail">call22ndworks@gmail.com</p>
        </div>

      </main >
    </div >
  );
}
