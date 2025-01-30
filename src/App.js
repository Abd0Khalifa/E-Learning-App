import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import CourseDetails from "./Pages/CourseDetails/CourseDetails.js";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
