import React from "react";
import { useState } from "react";

export default function (props) {
  const [marca_nome, setMarca] = useState("");
  const [nome_modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [combustivel, setCombustivel] = useState("");
  const [num_portas, setPortas] = useState("");
  const [valor_fipe, setValor] = useState("");
  const [cor, setCor] = useState("");

  const changeMarca = (e) => {
    setMarca(e.target.value);
  };
  const changeModelo = (e) => {
    setModelo(e.target.value);
  };
  const changeAno = (e) => {
    setAno(e.target.value);
  };
  const changeCombustivel = (e) => {
    setCombustivel(e.target.value);
  };
  const changePortas = (e) => {
    setPortas(e.target.value);
  };
  const changeValor = (e) => {
    setValor(e.target.value);
  };
  const changeCor = (e) => {
    setCor(e.target.value);
  };

  const clearState = () => {
    setMarca("");
    setModelo("");
    setAno("");
    setCombustivel("");
    setPortas("");
    setValor("");
    setCor("");
  };

  const enviarDados = (e) => {
    e.preventDefault();
    const dados = {
      marca_nome,
      nome_modelo,
      ano,
      combustivel,
      num_portas,
      valor_fipe,
      cor,
    };
    props.func(dados);
    clearState();
  };

  return (
    <div className="form-container">
      <form action="" className="form-car">
        <div>
          <label htmlFor="">Nome da Marca</label>
          <input type="text" value={marca_nome} onChange={changeMarca} />
        </div>
        <div>
          <label htmlFor="">Nome do Modelo</label>
          <input type="text" value={nome_modelo} onChange={changeModelo} />
        </div>
        <div>
          <label htmlFor="">Ano</label>
          <input type="text" value={ano} onChange={changeAno} />
        </div>
        <div>
          <label>Combustível</label>
          <input type="text" value={combustivel} onChange={changeCombustivel} />
        </div>
        <div>
          <label htmlFor="">Número de Portas</label>
          <input type="number" value={num_portas} onChange={changePortas} />
        </div>
        <div>
          <label htmlFor="">Valor</label>
          <input type="number" value={valor_fipe} onChange={changeValor} />
        </div>
        <div>
          <label htmlFor="">cor</label>
          <input type="text" value={cor} onChange={changeCor} />
        </div>
        <div>
          <button onClick={enviarDados}>Adicionar Carro</button>
        </div>
      </form>
    </div>
  );
}
