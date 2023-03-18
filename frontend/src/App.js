import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./components/Home";
import { Navigation } from "./components/Navigation";
import "./style.css";
function App() {
  return (
    <div>
      <div className="container">
        <div className="content">
          <Navigation></Navigation>
          <div className="mainbody">
            <Home></Home>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
