import React from "react";
import { Header, Footer } from "./components/index";
import { Home, Article } from "./pages/index";

import "./App.scss";

const App = () => (
  <>
    <Header />
		{/* <Home /> */}
    <Article />
    <Footer />
  </>
);

export default App;
