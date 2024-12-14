import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ClaimForm from "./components/ClaimForm";
import UploadSection from "./components/UploadSection";

function App() {
  return (
    <>
      <div className="background">
        <div className="main">
          <div className="app-container">
            <Sidebar />
            <div className="main-content">
              <Header />
              <ClaimForm />
              <UploadSection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
