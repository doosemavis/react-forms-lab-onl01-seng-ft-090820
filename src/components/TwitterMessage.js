import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleInput = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleInput} value={this.state.message} />
        You have {this.props.maxChars - this.state.message.length} character left.
      </div>
    );
  }
}

export default TwitterMessage;
