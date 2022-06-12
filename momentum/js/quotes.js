const quotes = [
  {
    quote: "같은 것을 놓고 좋아하고 싫어하는 것, 그것이 바로 진정한 우정이다.",
    author: "샬 루스트",
  },
  {
    quote: "스스로 행복하다고 믿지 않으면, 그 누구도 행복할 수 없다.",
    author: "푸블릴리우스 시루스",
  },
  {
    quote: "우리는 행복하기 때문에 웃는 게 아니라, 웃기 때문에 행복하다.",
    author: "윌리엄 제임 ",
  },
  {
    quote: "너 자신이 돼라. 다른 사람은 이미 있으니까.",
    author: "오스카 와일드",
  },
  {
    quote: "인생은 가까이서 보면 비극, 멀리서 보면 희극이다.",
    author: "찰리 채플린",
  },
  {
    quote: "인생을 다시 산다면 다음 번에는 더 많은 실수를 저지르리라.",
    author: "나딘 스테어",
  },
  {
    quote: "아무것도 하지 않으면 아무 일도 일어나지 않는다.",
    author: "기시미 이치로",
  },
  {
    quote: "일단 시작해라. 나중에 완벽해지면 된다.",
    author: "론 무어",
  },
  {
    quote: "사랑은 눈을 머는 것이고, 우정은 눈을 감는 것이다.",
    author: "니체",
  },
  {
    quote: "피할 수 없으면 즐겨라.",
    author: "로버트 엘리엇",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
