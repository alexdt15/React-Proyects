import { Component } from "react";

const styles = {
  detallesCarro: {
    backgroundColor: "#fff",
    position: "absolute",
    marginTop: 30,
    boxShadow: "1px 5px 5px rgb(0, 0, 0, 0.3)",
    borderRadius: "5px",
    width: "300px",
    right: 50,
  },
  ul: {
    margin: 0,
    padding: 0,
  },
  li: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 20px",
    borderBottom: "solid 1px #aaa",
  },
};

class DetallesCarro extends Component {
  render() {
    const { carro } = this.props;
    console.log(carro);
    return (
      <div style={styles.detallesCarro}>
        <ul style={styles.ul}>
          {carro.map((el, index) => {
            return (
              <li style={styles.li} key={index}>
                <img alt={el.name} src={el.img} width="60" height="38" />
                {el.name}
                <span> {el.cantidad}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default DetallesCarro;
