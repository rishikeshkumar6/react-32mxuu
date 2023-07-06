import React,{createContext} from "react";
import "./style.css";
import {Child1} from './components/child1'
export default function App() {
 const obj={
    name:"Rishikesh Kumar Singh",
    email:"rishikeshkumarsingh810@gmail.com"
  }
 export const data=createContext();
  return (
    <>
    <data.Provider value={obj}>
      <Child1/>
    </data.Provider>
    </>
  );
}



