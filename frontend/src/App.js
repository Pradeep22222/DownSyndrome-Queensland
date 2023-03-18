import "./App.css";
import { Navigation } from "./components/Navigation";
import "./style.css";
function App() {
  return (
    <div>
      <div className="container">
        <div className="content">
          <Navigation></Navigation>
          <div className="mainbody"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
