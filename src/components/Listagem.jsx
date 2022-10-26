import React from "react";
import { useState } from "react";
import AdicionarCarro from "./AdicionarCarro";
import cars from "../cars.json";

export default function () {
  const [carros, setCarros] = useState(cars);

  let tableData = carros.map((car) => {
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

  const addCarros = (data) => {
    const totalCarros = carros.length;
    data.id = totalCarros + 1;
    const atualizarCarros = [...carros];
    atualizarCarros.push(data);
    setCarros(atualizarCarros);
  };
  return (
    <div className="tableContainer">
      <AdicionarCarro func={addCarros} />
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
