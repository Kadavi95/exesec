import React from "react";

export function SimpleButton(props) {
  return (
    <>
      <button onClick={props.callbacl} className={props.className}>
        {props.text}
      </button>
    </>
  );
}
