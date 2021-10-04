import React from "react";
import { CallbackButton } from "./CallbackButton.js";

export function Summary(props) {
  return (
    <>
      <td>{props.index + 1}</td>
      <td>{props.item}</td>
      <td>{props.item.length}</td>
      <td>
        <CallbackButton theme="primary" text="Zmień kolejność" callback={props.reverseCallback}>

        </CallbackButton>

        <CallbackButton theme="info" text="Na  początek" callback={() => props.promoteCallback(props.item)}>
        </CallbackButton>

      </td>
    </>
  );
}
