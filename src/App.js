import React, { useState } from 'react';
import FormularioExercicio from './components/FormularioExercicio';
import ListExercicios from './components/ListExercicios';
import './App.css';

function App() {
  const [exercicios, setExercicios] = useState([]);

  // Função para adicionar um novo exercício
  const adicionarExercicio = (novoExercicio) => {
    setExercicios([...exercicios, novoExercicio]);
  };

  // Função para remover um exercício específico
  const removerExercicio = (indice) => {
    const novosExercicios = [...exercicios];
    novosExercicios.splice(indice, 1);
    setExercicios(novosExercicios);
  };

  // Função para remover todos os exercícios
  const removerTodosExercicios = () => {
    setExercicios([]);
  };

  // Função para editar um exercício
  const editarExercicio = (indice, novoExercicio) => {
    const novosExercicios = [...exercicios];
    novosExercicios[indice] = novoExercicio;
    setExercicios(novosExercicios);
  };

  return (
    <div className="App">
      <h1>Lista de Exercícios</h1>
      <FormularioExercicio onAdicionar={adicionarExercicio} />
      <ListExercicios
        exercicios={exercicios}
        onRemover={removerExercicio}
        onRemoverTodos={removerTodosExercicios}
        onEditar={editarExercicio}
      />
    </div>
  );
}

export default App;