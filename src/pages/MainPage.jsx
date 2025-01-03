import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";
import "../style.css";

export default function MainPage() {
  return (
    <>
      <div className="main-page">
        <Header />
      </div>
      <div>
        <MainContent />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
