import React, { Component } from "react";
// import PropTypes from 'prop-types';

export class SimpleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasButttonBeenClicked: false,
    };
  }
  handleClick = () => {
    this.props.incrementCallback(5)
    this.setState({hasButttonBeenClicked: true})
    this.props.callback()
  }
  render() {
    return (
      <>
        <button
          onClick={this.handleClick}
          className={this.props.classname}
          disabled={
            this.props.disabled === "true" || this.props.disabled === true
          }
        >
          {this.props.text} {this.props.counter}
          {this.state.hasButttonBeenClicked && <div>Button Clicked</div>}
        </button>
      </>
    );
  }
}

// SimpleButton.defaultProps = {
//   disabled: false
// }

// console.log(typeof SimpleButton);
// SimpleButton.propTypes = {
//   text: PropTypes.string,
//   theme: PropTypes.string,
//   callbacl: PropTypes.func,
//   disabled: PropTypes.bool
// }
