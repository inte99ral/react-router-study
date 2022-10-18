import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div style={{ padding: 20, border: "5px solid gray" }}>
          <Link to="/">홈</Link>
          <br />
          <Link to="/photo">사진</Link>
          <br />
          <Link to="/rooms">방 소개</Link>

          <Routes>
            <Route path="/" component={Home} />
            <Route path="/photo" component={Photo} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

function Home({ match }) {
  return <h2>여기는 홈페이지입니다.</h2>;
}
function Photo({ match }) {
  return <h2>여기는 사진첩입니다.</h2>;
}

export default App;
