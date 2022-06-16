import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [title, setTitle] = useState([
    "제주도 여행 후기",
    "부산 여행 후기",
    "강릉 여행 후기",
  ]);

  let [like, setLike] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Sungwk's BLOG</h4>
      </div>
      <div className="list">
        <h4>
          {title[0]}
          <span
            onClick={() => {
              setLike(like + 1);
            }}
          >
            👍
          </span>{" "}
          {like}
        </h4>
        <p>글 내용</p>
        <span
          onClick={() => {
            setTitle(["서울 여행 후기", "부산 여행 후기", "강릉 여행 후기"]);
          }}
        >
          oo
        </span>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>글 내용</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>글 내용</p>
      </div>
    </div>
  );
}

export default App;
