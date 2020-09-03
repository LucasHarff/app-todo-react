import React, { useState } from "react";

function Container() {
  function addNewTask() {
    const tarefa = document.getElementById("inputTarefa").value;
    const owner = document.getElementById("inputOwner").value;

    const tarefaCompleta = { tarefa, owner, simpleId: `${Date.now()}` };

    console.log(tarefaCompleta);
  }

  return (
    <div id="container">
      <input
        id="inputTarefa"
        placeholder="Digite uma nova tarefa"
        type="text"
      />
      <br />
      <input
        id="inputOwner"
        placeholder="Digite o nome do criador"
        type="text"
      />
      <br />
      <button type="button" onClick={addNewTask}>
        Criar!
      </button>
      <br />

      <div className="previewTask">
        <h3>nome</h3>
        <h3>owner</h3>
      </div>
    </div>
  );
}

export default Container;
