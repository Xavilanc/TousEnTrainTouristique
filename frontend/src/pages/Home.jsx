// eslint-disable-next-line import/no-unresolved
import Header from "@components/Header";
import SearchTrain from "@components/SearchTrains";
// eslint-disable-next-line import/no-unresolved
import TrainCard from "@components/TrainCard";

const sampleTrains = [
  {
    id: 1,
    src: "https://placekitten.com/350/200",
    title: "Miaou express",
  },
  {
    id: 2,
    src: "https://placekitten.com/350/200",
    title: "Train des gentils miaoux",
  },
  {
    id: 3,
    src: "https://placekitten.com/350/200",
    title: "Tchou tchou Cats",
  },
];

export default function Home() {
  return (
    <div>
      <Header />
      <SearchTrain />
      {/* <TrainCard src={sampleTrains[0].src} title={sampleTrains[0].title} />
      <TrainCard src={sampleTrains[1].src} title={sampleTrains[1].title} />
      <TrainCard src={sampleTrains[2].src} title={sampleTrains[2].title} /> */}
    </div>
  );
}
