import { Component } from "react";
import Producto from "./Producto";

const styles = {
  productos: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
};
class Productos extends Component {
  render() {
    const { productos, addToCart } = this.props;

    return (
      <div style={styles.productos}>
        {productos.map((producto, index) => {
          return (
            <Producto key={index} addToCart={addToCart} producto={producto} />
          );
        })}
      </div>
    );
  }
}

export default Productos;
