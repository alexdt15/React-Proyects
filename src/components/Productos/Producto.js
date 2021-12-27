import { Component } from "react";
import Button from "../Button/Button";

const styles = {
  producto: {
    border: "solid 1px #eee",
    boxShadow: "0 5px 5px rgb(0, 0, 0, 0.1)",
    width: "30%",
    padding: "10px 15px",
    borderRadius: "8px",
  },

  img: {
    width: "100%",
  },
};
class Producto extends Component {
  render() {
    const { producto, addToCart } = this.props;
    return (
      <div style={styles.producto}>
        <img style={styles.img} alt={producto.name} src={producto.img} />
        <h3>{producto.name}</h3>
        <p>{producto.price}</p>
        <Button onClick={() => addToCart(producto)}>Agregar al carro</Button>
      </div>
    );
  }
}

export default Producto;
