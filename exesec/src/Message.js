import React from 'react';


export function Message(props){
//   let classes = props.name === "Raz" ? "bg-warrning p-2 text-center" :
//   "bg-success text-white text-center p-2"

    let classes;
    switch (props.greeting) {
        case "Raz":
            classes = "bg-warning p-2 text-center";
            break;
        case "dwa": 
            classes = "bg-secondary text-white text-center p-2";
            break;
        default: 
            classes = "bg-success text-white text-center p-2"
    }
  return (
      <>
        <h4 className={classes}>
            {props.greeting}, {props.name}
        </h4>
      </>
  )
}
