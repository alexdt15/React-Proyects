import { Component } from "react";
import Bubble from "../Bubble/Bubble";
import DetallesCarro from "../DetallesCarro/DetallesCarro";

const styles = {
  cart: {
    backgroundColor: "#359A2C",
    color: "#fff",
    border: "none",
    padding: "15px",
    borderRadius: "12px",
    cursor: "pointer",
  },
  bubble: {
    position: "relative",
    left: "12px",
    top: "20px",
  },
};

class Cart extends Component {
  render() {
    const { carro, esCarroVisible, mostrarCarro } = this.props;
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);
    return (
      <div>
        <span style={styles.bubble}>
          {cantidad !== 0 ? <Bubble value={cantidad} /> : null}
        </span>
        <button style={styles.cart} onClick={mostrarCarro}>
          Carro
        </button>

        {esCarroVisible ? <DetallesCarro carro={carro} /> : null}
      </div>
    );
  }
}

export default Cart;
