import React, { Component } from "react";
import { List, ListItem, ListItemText } from "material-ui";

const medicos = [
  {
    nome: "Testando",
    telefone: "11-99999-0000"
  }
];
class ListaMedicos extends Component {
  state = {
    listaMedicos: medicos
  };

  render() {
    return (
      <div>
        <h4>Médicos</h4>
        <List>
          {this.state.listaMedicos.map((medico, index) => (
            <ListItem key={index}>
              <ListItemText>{medico.nome}</ListItemText>
              <ListItemText>{medico.telefone}</ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default ListaMedicos;
