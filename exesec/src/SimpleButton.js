import React, { Component } from "react";
// import PropTypes from 'prop-types';

export class SimpleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      hasButttonBeenClicked: false,
    };
  }
  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
      hasButttonBeenClicked: this.state.hasButttonBeenClicked === false ? true : false
    })
    this.props.callback()
  }
  render() {
    return (
      <>
        <button
          onClick={this.props.callback}
          className={this.props.classname}
          disabled={
            this.props.disabled === "true" || this.props.disabled === true
          }
        >
          {this.props.text} {this.state.counter}{" "}
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
