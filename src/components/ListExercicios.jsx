import React, { useState } from 'react';

function ListExercicios({ exercicios, onRemover, onRemoverTodos, onEditar }) {
  const [editando, setEditando] = useState(-1);
  const [novoNome, setNovoNome] = useState('');

  const handleEditar = (indice) => {
    setEditando(indice);
    setNovoNome(exercicios[indice]);
  };

  const handleConfirmarEdicao = (indice) => {
    if (novoNome.trim()) {
      onEditar(indice, novoNome);
      setEditando(-1);
      setNovoNome('');
    }
  };

  return (
    <div>
      <ul>
        {exercicios.map((exercicio, index) => (
          <li key={index}>
            {editando === index ? (
              <div>
                <input
                  type="text"
                  value={novoNome}
                  onChange={(e) => setNovoNome(e.target.value)}
                />
                <button onClick={() => handleConfirmarEdicao(index)}>Salvar</button>
              </div>
            ) : (
              <div>
                {exercicio}
                <button onClick={() => handleEditar(index)}>Editar</button>
                <button onClick={() => onRemover(index)}>Remover</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      {exercicios.length > 0 && (
        <button onClick={onRemoverTodos}>Remover Todos</button>
      )}
    </div>
  );
}

export default ListExercicios;