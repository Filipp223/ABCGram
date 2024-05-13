import Header from "./components/Header/Header.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogues from "./components/Dialogues/Dialogues.jsx";
import Users from "./components/Users/Users.jsx";
import Feed from "./components/Feed/Feed.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {Routes, Route} from "react-router-dom";

import './App.css';

function App({postArray, dialogueArray}) {
  // const obj = {
  //   surname: "Smith",
  //   name: "Kyle",
  //   age: 27,
  // }
  // const {name, age} = obj;
  // console.log(name, age);

  // const numArray = [1, 2, 3, 4, 5];
  // const [num1, num2] = numArray;

  // const newArray = numArray.map((num, i) => {
  //   return num*10;
  // })

  // const newArray = [];
  // numArray.forEach((num, i) => {
  //   newArray.push(num * 10);
  // })
  // console.log(newArray);

  return (
    <>
      <Header/>

      <Nav/>

      <Routes>
        <Route path="/" element={<Profile postArray={postArray}/>}/>
        <Route path="/messages" element={<Dialogues dialogueArray={dialogueArray}/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/feed" element={<Feed/>}/>
      </Routes>

      <Footer/>

    </>
  );
}

export default App;