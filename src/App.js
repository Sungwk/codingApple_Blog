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
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Sungwk's BLOG</h4>
      </div>
      <button
        onClick={() => {
          let arr = [...title];
          arr[0] = "서울 여행 후기";
          setTitle(arr);
        }}
      >
        글수정
      </button>
      <button
        onClick={() => {
          let arr = [...title].sort();
          setTitle(arr);
        }}
      >
        글 제목 정렬
      </button>
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
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>글 내용</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            if (modal == false) {
              setModal(true);
            } else {
              setModal(false);
            }
          }}
        >
          {title[2]}
        </h4>
        <p>글 내용</p>
      </div>

      {modal == true ? <Modal /> : ""}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
