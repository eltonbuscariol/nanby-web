import React, { Component } from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell
} from "material-ui";

const medicos = [
  {
    nome: "Teste",
    telefone: "11-99999-0000"
  }
];
class ListaMedicos extends Component {
  render() {
    return (
      <>
        <h4>Médicos Teste</h4>
        <TableContainer>
          <Table>
            <TableBody>
              {medicos.map(medico => (
                <TableRow>
                  <TableCell>{medico.nome}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
}

export default ListaMedicos;
