import dynamic from "next/dynamic";
import Image from "next/image";

import "@/app/main.css"
import PurpleButton from "@/components/PurpleButton";
import WhiteButtonTitle from "@/components/WhiteButtonTitle";
import MiniStar from "@/components/MiniStar";
import Ask from "@/components/Ask";
import Result from "@/components/Result";

const Scroll = dynamic(
  () => {
    return import("@/components/ScrollToTop");
  },
  { ssr: false }
);

export default function Home() {
  return (
    <div className="mainWrapper">
      <main className="main">
        <div className="logo">
          <div className="circle purple shadow">
            <span className="circleTitle">Call 22</span>
          </div>
          <span className="year">2024</span>
        </div>

        <PurpleButton
          link={"https://drive.google.com/file/d/10_qClL-HXUuJOZtV-m1LvvlWxf6eehw6/view?usp=sharing"}
          message={"콜22 캠페인 브로슈어 다운로드"}
        />
        <PurpleButton
          link={"#askSection"}
          message={"서명운동 참여하기"}
        />

        <div className="title">
          <WhiteButtonTitle
            message={"콜22 총선 캠페인"}
          />
          <Image
            src="/images/bell.png"
            alt="bell"
            width={80}
            height={87.5}
            style={
              {
                position: "absolute",
                margin: "0 auto",
                left: "0",
                right: "0"
              }
            }
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
            나는 오늘 성평등에<br />
            투표합니다.
          </p>
          <MiniStar />
          <p>
            강간죄의 구성요건을<br />
            &apos;동의여부&apos;로 바꾸고,<br />
            성평등 전담부처<br />
            강화하는데 동의하십니까?
          </p>

          <MiniStar />
          <div className="speech">
            <p>
              윤석열:<br />
              “구조적인 성차별은 없다.<br />
              차별은 개인적 문제”<br />
              <br />
              권성동:<br />
              “비동의 간음죄 도입?<br />
              무고가 늘어날거에요.<br />
              이래서 여가부 폐지하자는 겁니다.”<br />
              <br />
              한동훈:<br />
              “어려운 면이 있습니다.<br />
              이 부분에서 억울한 사람이 처벌받게<br />
              해서는 안되지 않겠습니까?”<br />
              <br />
              법무부:<br />
              “법무부는 소위 ‘비동의간음죄’ 개정<br />
              계획이 없음을 알려드립니다.”<br />
              <br />
              여성가족부:<br />
              “비동의 간음죄 개정 검토와<br />
              관련하여 정부는 개정 계획이<br />
              없음을 알려드린다”<br />
            </p>
          </div>

          <p>
            22대 국회는<br />
            성평등 퇴보를 막을 수 있습니까?
          </p>
          <MiniStar />
          <p>
            현재까지 000개의 질문과 함께<br />
            하고 있습니다.<br />
            <br />
            클릭 한 번으로 &apos;성평등&apos;을 위한
            발걸음에 함께 해주세요!
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
          <p className="contactEmail">call22ndworks@gmail.com</p>
        </div>

        <div className="scroll">
          <Scroll
            link={"#main"}
          />
        </div>
      </main >
    </div >
  );
}
