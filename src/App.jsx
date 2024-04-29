import Header from "./components/Header/Header.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogues from "./components/Dialogues/Dialogues.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {Routes, Route} from "react-router-dom";

import './App.css';

function App() {
  return (
    <>
      <Header/>

      <Nav/>

      <Routes>
        <Route path="/" element={<Profile/>}/>
        <Route path="/messages" element={<Dialogues/>}/>
        <Route path="/users" element={<h1>Users</h1>}/>
      </Routes>

      <Footer/>

    </>
  );
}

export default App;