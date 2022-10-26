import React from "react";
import { useState } from "react";
import cars from "../cars.json";

export default function () {
  const [carros, setCarros] = useState(cars);

  let carrosNovos = carros.sort(
    (a, b) => b.timestamp_cadastro - a.timestamp_cadastro
  );

  let fiveCarrosNovos = carrosNovos.slice(0, 5);

  let tableData = fiveCarrosNovos.map((car) => {
    return (
      <tr>
        <td>{car.marca_nome}</td>
        <td>{car.nome_modelo}</td>
        <td>{car.ano}</td>
        <td>{car.combustivel}</td>
        <td>{car.num_portas}</td>
        <td>R${car.valor_fipe} Mil Reais</td>
        <td>{car.cor}</td>
      </tr>
    );
  });

  return (
    <div className="tableContainer">
      <table className="table table-striped">
        <thead className="thead">
          <tr className="trHead">
            <th>Marca</th>
            <th>Modelo</th>
            <th>Ano</th>
            <th>Combustível</th>
            <th>Nº de Portas</th>
            <th>Valor - Tabela Fipe</th>
            <th>Cor</th>
          </tr>
        </thead>
        <tbody className="tbody">{tableData}</tbody>
      </table>
    </div>
  );
}
