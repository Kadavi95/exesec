
// import { CallbackButton } from "./CallbackButton.js";
import React, { Component } from 'react';

import { SimpleButton } from "./SimpleButton";
import { HooksButton } from "./HooksButton";

export class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    
  }

  incrementCounter = (increment) => {
    this.setState((state) => {return { counter: state.counter + increment}})
  }
  render() {
    const props = this.props
    
    
  
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
        text={`Odwróć kolejność (${props.item})`}
        counter={this.state.counter}
        incrementCallback = {this.incrementCounter}
        >

        </SimpleButton>

        {/* <SimpleButton classname ="btn btn-info btn-sm m-1"
        callback={() => props.promoteCallback(props.item )}
        text={`Na górę (${props.item})`}>

        </SimpleButton> */}

        <HooksButton className="btn btn-secondary btn-sm m-1"  callback={() => props.promoteCallback(props.item )} text={`Na początek (${props.item})`}
        counter={this.state.counter}
        incrementCallback = {this.incrementCounter}
        >

        </HooksButton>

      </td>
    </>
  );
      }
}
