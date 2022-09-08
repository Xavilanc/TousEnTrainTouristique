import Header from "@components/Header";
import SearchTrain from "@components/SearchTrains";
import Footer from "@components/Footer";
import ContactPage from "@pages/ContactPage";

export default function Home() {
  return (
    <div>
      <Header />
      <SearchTrain />
      <Footer />
      <ContactPage />
    </div>
  );
}
