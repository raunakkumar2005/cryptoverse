import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Coinpage from "./pages/Coinpage";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coins/:id" element={<Coinpage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
