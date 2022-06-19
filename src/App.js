import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [title, setTitle] = useState(["제주도 여행 후기", "부산 여행 후기", "강릉 여행 후기"]);

  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [index, setIndex] = useState();
  let [inputTitle, setInputTitle] = useState();

  let changeTitle = () => {
    let arr = [...title];
    arr[0] = "서울 여행 후기";
    setTitle(arr);
  };
  return (
    <div className="App">
      <div className="black-nav">
        <h4>Sungwk's BLOG</h4>
      </div>
      <button onClick={changeTitle}>글수정</button>
      <button
        onClick={() => {
          let arr = [...title].sort();
          setTitle(arr);
        }}
      >
        글 제목 정렬
      </button>

      {title.map(function (postTitle, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                modal == true ? setModal(false) : setModal(true);
                setIndex(i);
              }}
            >
              {postTitle}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let arr = [...like];
                  arr[i] += 1;
                  setLike(arr);
                  console.log(like);
                }}
              >
                {" "}
                👍{" "}
              </span>
              {like[i]}{" "}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  let arr = [...title];
                  arr.splice(i, 1);
                  setTitle(arr);
                }}
              >
                삭제
              </button>
            </h4>
            <p>글 내용</p>
          </div>
        );
      })}
      <input
        onChange={(e) => {
          setInputTitle(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let arr = [...title];
          if (inputTitle) {
            arr.unshift(inputTitle);
          } else {
            alert("글을 입력하세요!");
          }
          setTitle(arr);
          let arr2 = [...like];
          arr2.unshift(0);
          setLike(arr2);
        }}
      >
        글 추가
      </button>
      {modal == true ? <Modal title={title} changeTitle={changeTitle} index={index} /> : ""}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.index]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.changeTitle}>글수정</button>
    </div>
  );
}

export default App;
