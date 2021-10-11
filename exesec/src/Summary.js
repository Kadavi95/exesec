import React from "react";
// import { CallbackButton } from "./CallbackButton.js";
import { SimpleButton } from "./SimpleButton";

export function Summary(props) {
  return (
    <>
      <td>{props.index + 1}</td>
      <td>{props.item}</td>
      <td>{props.item.length}</td>
      <td>
        {/* <CallbackButton callback={props.reverseCallback}>

        </CallbackButton>

        <CallbackButton theme="info" text="Na  początek" callback={() => props.promoteCallback(props.item)} >
        </CallbackButton> */}
        <SimpleButton classname ="btn btn-warning btn-sm m-1"
        callback={props.reverseCallback}
        text={`Odwróć kolejność (${props.item})`}>

        </SimpleButton>

        <SimpleButton classname ="btn btn-info btn-sm m-1"
        callback={() => props.promoteCallback(props.item )}
        text={`Na górę (${props.item})`}>

        </SimpleButton>

      </td>
    </>
  );
}
