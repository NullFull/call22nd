import Image from "next/image";
import "@/app/main.css"
import PurpleButton from "@/components/PurpleButton";
import WhiteButton from "@/components/WhiteButton";
import WhiteButtonTitle from "@/components/WhiteButtonTitle";
import MiniStar from "@/components/MiniStar";
import SearchAndSend from "@/components/SearchAndSend";

export default function Home() {
  return (
    <main className="main">
      <div className="logo">
        <span className="year">2024</span>
        <span className="circle purple shadow">Call 22</span>
      </div>

      <div className="header">
        <PurpleButton
          link={"https://www.google.com/"}
          message={"콜22 캠페인 브로슈어 다운로드"}
        />
        <PurpleButton
          link={"https://www.google.com/"}
          message={"서명운동 참여하기"}
        />
      </div>

      <div className="title">
        <WhiteButtonTitle
          link={"https://www.google.com/"}
          message={"콜22 총선 캠페인"}
        />
        <Image
          src="/bell.svg"
          alt="bell"
          width={0}
          height={0}
          style={
            {
              width: "40vw",
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
      </div>

      <div className="message textarea">
        <p>우리 동네 국회의원 후보자들은 불평등한 강간죄를 바꿔 볼 생각이 있는 걸까?</p>
        <MiniStar />
        <p>21대에 이어 22대 국회의원 후보자에게 또다시 질문하러 콜22 팀이 돌아왔습니다!</p>
        <MiniStar />
        <p>저희는 강간죄의 구성요건을 피해자의 &apos;동의&apos; 여부로 개정할 의사가 있는지 궁금해하는 시민들의 질문을 <span className="blue">167,398번</span> 발송했고</p>
        <Image
          src="/law.svg"
          alt="law"
          width={0}
          height={0}
          style={
            {
              width: "40vw",
              height: "auto",
              marginTop: "15px",
              marginBottom: "15px"
            }
          }
        />
        <p>당선된 21대 국회의원 중 <span className="blue">206명</span>이 응답해 비동의 강간죄를 도입하는데 찬성한다는 의견을 보내주셨습니다.</p>
        <MiniStar />
        <p>이후 21대 국회에서는 총 2건의 개정안이 발의되었지만 해당 법안은 무관심 속에 본회의까지 도달하지 못했으며, 현재 21대 국회 법안 처리기한이 만료되어 기회를 또다시 잃었습니다.</p>
        <MiniStar />
        <p>이상한 나라의 대한민국은 판사를 잘 만나야 자신의 강간 피해를 사법적으로 해결할 수 있는 나라이기에 수많은 피해 사건이 지금 이 순간에도 법망을 빠져나가고 있습니다.</p>
        <div className="buttons">
          <WhiteButton
            link={"https://www.google.com/"}
            message={"2022-2023 강간 무죄 판결 보기"}
          />
          <WhiteButton
            link={"https://www.google.com/"}
            message={"폐기 법안 / 성범죄 기사 보러 가기"}
          />
        </div>
        <Image
          src="/qna.svg"
          alt="qna"
          width={0}
          height={0}
          style={
            {
              width: "40vw",
              height: "auto",
              marginTop: "15px",
              marginBottom: "15px"
            }
          }
        />
        <p>우리 동네 지역 국회의원 후보자들에게 강간죄를 개정할 뜻이 있는지 물어봐주세요.</p>
        <MiniStar />
        <p>콜22 팀이 여러분의 질문을 대신 전해드립니다.</p>
      </div>

      <div className="worker">
        <p className="message subtitle">국회의원 후보에게 질문하기</p>
        <SearchAndSend />
      </div>

      <div className="footer">
        <p>Contact Us</p>
        <p>contact@call21.works</p>
      </div>
    </main>
  );
}
