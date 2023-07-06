import React  from 'react';
import { data } from '../App';

export function Child3() {
 

  return (
    <>
     <data.Consumer>
       {
         (obj)=>{
           return (
             <h1>{obj.name}</h1>
           )
         }
       }
     </data.Consumer>
    </>
  );
}
