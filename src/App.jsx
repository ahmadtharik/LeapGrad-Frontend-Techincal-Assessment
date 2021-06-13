import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header.jsx";
import Display from "./components/Display.jsx";
import Footer from "./Footer.jsx";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="container-view">
        <Display />
      </div>
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
