import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./Layout";
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import Support from "./Components/Support";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/home" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/support" element={<Support />} />
          </Route>
          <Route path="/signin" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          {/* <Route path="/layout" element={<Layout />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
