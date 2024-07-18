import React, { useState } from 'react';

function FormularioExercicio({ onAdicionar }) {
  const [nome, setNome] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome.trim()) {
      onAdicionar(nome);
      setNome('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do Exercício"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <button type="submit">Adicionar Exercício</button>
    </form>
  );
}

export default FormularioExercicio;
