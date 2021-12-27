import { Component } from "react";
import Productos from "./components/Productos/Productos";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title/Title";

class App extends Component {
  state = {
    productos: [
      { name: "Tomate", price: "1€", img: "/products/tomate.jpg" },
      { name: "Lechuga", price: "2€", img: "/products/lechuga.jpg" },
      { name: "Guisantes", price: "3€", img: "/products/guisantes.jpg" },
    ],
    carro: [],
    esCarroVisible: false,
  };

  addToCart = (producto) => {
    console.log(producto);
    const { carro } = this.state;
    if (carro.find((x) => x.name === producto.name)) {
      const newCarro = carro.map((x) =>
        x.name === producto.name
          ? {
              ...x,
              cantidad: x.cantidad + 1,
            }
          : x
      );
      return this.setState({ carro: newCarro });
    }
    return this.setState({
      carro: this.state.carro.concat({ ...producto, cantidad: 1 }),
    });
  };

  mostrarCarro = () => {
    if (this.state.carro.length === 0) {
      return;
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible });
  };

  render() {
    const { esCarroVisible, mostrarCarro } = this.state;
    return (
      <div>
        <Navbar
          carro={this.state.carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          <Title />
          <Productos
            addToCart={this.addToCart}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
