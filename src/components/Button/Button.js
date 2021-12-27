import { Component } from "react";

const styles = {
  button: {
    backgroundColor: "#0A283E",
    padding: "12px 18px",
    color: "#fff",
    border: "none",
    borderRadius: "7px",
    cursor: "pointer",
  },
};
class Button extends Component {
  render() {
    return <button style={styles.button} {...this.props}></button>;
  }
}

export default Button;
