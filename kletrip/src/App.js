import React, { useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home    from "./myCompos/home";
import Homef    from "./myCompos/homef";
import Header  from "./myCompos/header";
import History from "./myCompos/history";
import Gallery from "./myCompos/Gallery";
import Input from "./myCompos/Input"
import Register from './myCompos/register';
import Login from './myCompos/login';
//import Logsign from "./myCompos/logSign";

function App(props) {

  const [galMenu , setGalMenu] = useState([
    {
      sno     : 1,
      nameDep : "Computer Science & Engineering",
      imgLink : " https://gdurl.com/U7Wq",
      desc    : "Computing is part of everything we do! Computer scientists understand the underlying principles of programming and algorithms and use them to design software, systems, and networks to solve problems in a variety of business, scientific and social contexts. Our curriculum is unique in its opportunities for hands-on learning to master fundamental principles of computer science and computational thinking and use them to solve real-life problems. The students have the flexibility to choose from a wide range of courses in advanced topics, including artificial intelligence, cloud computing, data engineering, high-performance computing, and computer vision."
    },
    {
      sno     : 2,
      nameDep : "Electronics & Communication Engineering",
      imgLink : "https://gdurl.com/bSJQ",
      desc    : "Electronics and Communication Engineering is one of the broadest and impactful engineering disciplines with a unique mix of electrical, electronics, and computer-related courses. The program covers a wide spectrum of topics, from power generation and distribution, microelectronics, drives and controls, embedded systems, VLSI, automotive engineering, and computer software. The curriculum is continually updated to be in tune with advances in the field and allows sufficient flexibility to explore and master specialty areas that meet industry needs. The pedagogy enables the students to acquire hands-on experience through intensive laboratory and project works related to current practices in the field. The program graduates have excellent career prospects across a broad range of sectors and also for higher studies."
    }
  ]);

  const addDepa = (Dn,Du,Dd)=>{
    console.log("I am Adding",Dn,Du,Dd);
    let snoo= galMenu[galMenu.length-1].sno+1;
    const myD ={
      sno     : snoo,
      nameDep : Dn,
      imgLink : Du,
      desc    : Dd
    }
    console.log(myD);
    setGalMenu([...galMenu,myD]);
    console.log(myD);
  }
  return (
    <>
      <Router>
        <Switch>

          <Route exact path="/">
            <Homef/>
          </Route>
          <Route exact path='/Register' >
            <Register/>
          </Route>
          <Route exact path="/Login">
            <Login/>
          </Route> 

          <Route exact path="/Home">
            <Header galMenu={galMenu}/>
            <Home/>
          </Route>

          <Route exact path="/input">
            <Header galMenu={galMenu}/>
            <Input addDepa={addDepa}/>
          </Route>

          <Route exact path="/history">
            <Header galMenu={galMenu}/>
            <History/>
          </Route>

          <Route path="/Gallery/:id" >
            <Header galMenu={galMenu}/>
            <Gallery post={galMenu}/>
          </Route>
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
