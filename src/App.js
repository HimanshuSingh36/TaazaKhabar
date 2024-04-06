import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  return (
    <div>
      <Router>
        <LoadingBar color="#f11946" progress={progress} />
        <Navbar />
        <Routes>
          {/* <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                apiKey={apiKey}
                country={"in"}
                category="general"
              />
            }
          /> */}
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                pageSize={pageSize}
                apiKey={apiKey}
                country={"in"}
                category="business"
                heading={"TaazaKhabar - Business Headlines"}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                pageSize={pageSize}
                apiKey={apiKey}
                country={"in"}
                category="entertainment"
                heading={"TaazaKhabar - Entertainment Headlines"}
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                apiKey={apiKey}
                country={"in"}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                pageSize={pageSize}
                apiKey={apiKey}
                country={"in"}
                category="health"
                heading={"TaazaKhabar - Health Headlines"}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                pageSize={pageSize}
                apiKey={apiKey}
                country={"in"}
                category="science"
                heading={"TaazaKhabar - Science Headlines"}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                pageSize={pageSize}
                apiKey={apiKey}
                country={"in"}
                category="sports"
                heading={"TaazaKhabar - Sports Headlines"}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                pageSize={pageSize}
                apiKey={apiKey}
                country={"in"}
                category="technology"
                heading={"TaazaKhabar - Tech Headlines"}
              />
            }
          />
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                apiKey={apiKey}
                country={"in"}
                category="general"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
