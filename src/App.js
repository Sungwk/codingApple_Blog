import logo from "./logo.svg";
import "./App.css";

function App() {
  let title = "제주도 여행 후기";

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Sungwk's BLOG</h4>
      </div>
      <h4 style={{ fontWeight: "bold", fontSize: "20px" }}>{title}</h4>
    </div>
  );
}

export default App;
