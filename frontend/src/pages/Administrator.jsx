import AddImage from "../components/AddImage";
import Header from "../components/Header";
import ReviewsList from "../components/ReviewsList";
import TrainList from "../components/TrainList";
import "../assets/styles/Administrator.css";

const administrator = () => {
  return (
    <div>
      <Header />
      <p>Admin Area</p>
      <ReviewsList />
      <AddImage />
      <TrainList />
    </div>
  );
};

export default administrator;
