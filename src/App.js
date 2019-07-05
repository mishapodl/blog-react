import React from "react";
import { Header, Footer } from "./components/index";
import { News, Post } from "./containers/index";
import "./App.scss";

const App = () => (
  <>
    <Header />
		<News />
    {/* <Post /> */}
    <Footer />
  </>
);

export default App;
