import Image from "next/image";

import "@/app/main.css"
import PurpleButton from "@/components/PurpleButton";
import WhiteButtonTitle from "@/components/WhiteButtonTitle";
import MiniStar from "@/components/MiniStar";
import Ask from "@/components/Ask";
import Stats from "@/components/Stats";
import Logo from "@/components/Logo";
import Result from "@/components/Result";


export default function Home() {
  return (
    <div className="mainWrapper">
      <main className="main">
        <div className="header">
          <div className="logoArea">
            <Logo />
            <div className="year">2024</div>
          </div>
          <div className="purpleButtons">
            <PurpleButton
              link={"https://drive.google.com/file/d/10_qClL-HXUuJOZtV-m1LvvlWxf6eehw6/view?usp=sharing"}
              message={"콜22 캠페인 브로슈어 다운로드"}
              download
            />
            <PurpleButton
              link={"https://wonderful-law.korea.wtf/result?opened=true"}
              message={"강간죄 개정 촉구하러 가기"}
            />
          </div>
        </div>

        <div className="title">
          <WhiteButtonTitle
            message={"콜22 총선 캠페인"}
          />
          <div className="bellImage">
            <Image
              src="/images/bell.webp"
              alt="bell"
              fill
              priority
            />
            <div className="stars">
              <Image
                src="/images/star.svg"
                alt="star"
                width={15}
                height={15}
                style={
                  {
                    position: "absolute",
                    top: "150px",
                    left: "-90px"
                  }
                }
              />
              <Image
                src="/images/star.svg"
                alt="star"
                width={30}
                height={30}
                style={
                  {
                    position: "absolute",
                    top: "50px",
                    right: "-60px"
                  }
                }
              />
            </div>
          </div>
        </div>

        <div className="message textarea">
          <p>
            강간죄 개정연대<br />
            #call22nd
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

        <div className="result">
          <Result />
        </div>

        <div className="worker" id="askSection">
          <Ask />
        </div>

        <div className="footer">
          <p className="contactText">Contact Us</p>
          <p className="contactEmail">call22.works@gmail.com</p>
        </div>

      </main >
    </div >
  );
}
