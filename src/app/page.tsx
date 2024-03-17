import Image from "next/image";
import "@/app/main.css"
import PurpleButton from "@/components/PurpleButton";
import WhiteButton from "@/components/WhiteButton";
import WhiteButtonTitle from "@/components/WhiteButtonTitle";
import MiniStar from "@/components/MiniStar";
import Ask from '@/components/Ask';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <main className="main">
      <div className="logo">
        <span className="year">2024</span>
        <span className="circle purple shadow">Call 22</span>
      </div>

      <div className="header">
        <PurpleButton
          link={"https://drive.google.com/file/d/10_qClL-HXUuJOZtV-m1LvvlWxf6eehw6/view?usp=sharing"}
          message={"콜22 캠페인 브로슈어 다운로드"}
        />
      </div>
      <div className="header">
        <PurpleButton
          link={"#askSection"}
          message={"서명운동 참여하기"}
        />
      </div>

      <div className="title">
        <WhiteButtonTitle
          message={"콜22 총선 캠페인"}
        />
        <Image
          src="/images/bell.svg"
          alt="bell"
          width={0}
          height={0}
          style={
            {
              width: "80px",
              height: "auto",
              verticalAlign: "middle",
              position: "absolute",
              margin: "auto",
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
        <p>우리 동네 국회의원<br />후보자들은<br />불평등한 강간죄를<br />바꿔 볼 생각이 있는 걸까?</p>
        <MiniStar />
        <p>21대에 이어<br />22대 국회의원 후보자들에게<br />또다시 질문하러<br />콜22 팀이 돌아왔습니다!</p>
        <MiniStar />
        <p>저희는 강간죄의 구성요건을<br />피해자의 &apos;동의&apos; 여부로<br />개정할 의사가 있는지<br />궁금해하는 시민들의 질문을<br /><span className="blue">167,398번</span> 발송했고</p>
        <Image
          src="/images/law.svg"
          alt="law"
          width={0}
          height={0}
          style={
            {
              width: "144px",
              height: "auto",
              marginTop: "15px",
              marginBottom: "15px"
            }
          }
        />
        <p>당선된 21대 국회의원들 중<br /><span className="blue">206명</span>이 응답해<br />비동의 강간죄를 도입하는 데<br />찬성한다는<br />의견을 보내주셨습니다.</p>
        <MiniStar />
        <p>이후 21대 국회에서는<br />총 2건의 개정안이<br />발의되었지만<br />해당 법안들은 무관심 속에<br />본회의까지 도달하지 못했으며,<br />현재 21대 국회의<br />법안 처리 기한이 만료되어<br />기회를 또다시 잃었습니다.</p>
        <MiniStar />
        <p>이상한 나라의 대한민국은<br />판사를 잘 만나야<br />자신의 강간 피해를<br />사법적으로 해결할 수 있는<br />나라이기에<br />수많은 피해 사건들이<br />지금 이 순간에도<br />법망을 빠져나가고 있습니다.</p>
        <div className="buttons">
          <WhiteButton
            link={"https://super-mayonnaise-862.notion.site/7b0077e5966c4be79b1745bc5b3366ba"}
            message={"2022-2023 강간 무죄 판결 보기"}
          />
        </div>
        <div className="buttons">
          <WhiteButton
            link={"https://super-mayonnaise-862.notion.site/21-feaa4e5208e0412dafa84bad1c45816e"}
            message={"폐기 법안 / 성범죄 기사 보러 가기"}
          />
        </div>
        <Image
          src="/images/qna.svg"
          alt="qna"
          width={0}
          height={0}
          style={
            {
              width: "144px",
              height: "auto",
              marginTop: "15px",
              marginBottom: "15px"
            }
          }
        />
        <p>우리 동네<br />국회의원 후보자들에게<br />강간죄를 개정할 뜻이 있는지<br />물어봐 주세요.</p>
        <MiniStar />
        <p>콜22 팀이 여러분의 질문을<br />대신 전해드립니다.</p>
      </div>

      <div className="worker" id="askSection">
        <p className="message subtitle">국회의원 후보에게 질문하기</p>
        <Ask />
      </div>

      <div className="footer">
        <p>Contact Us</p>
        <p>call22ndworks@gmail.com</p>
      </div>

      <div className="scroll">
        <ScrollToTop
          link={"#main"}
        />
      </div>
    </main>
  );
}
