import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./components/Home";
import { Navigation } from "./components/Navigation";
import "./style.css";
import { Calendar } from "./components/Calendar";
import { Gallery } from "./components/Gallery";
import { FAQ } from "./components/FAQ";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
function App() {
  return (
    <div>
      <div className="container">
        <div className="content">
          <Navigation></Navigation>
          <div className="mainbody">
            <Home></Home>
            <Calendar></Calendar>
            <Gallery></Gallery>
            <FAQ></FAQ>
            <About></About>
            <Contact></Contact>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
