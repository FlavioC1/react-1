import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Tarefas = () => {
  // Estado para armazenar as tarefas
  const [tarefas, setTarefas] = useState([]);

  // Função para buscar tarefas da API
  const fetchTarefas = async () => {
    try {
      const response = await axios.get('https://sua-api.com/tarefas');
      setTarefas(response.data);
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
    }
  };

  // useEffect para chamar a função fetchTarefas quando o componente for montado
  useEffect(() => {
    fetchTarefas();
  }, []);

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.title} - {tarefa.completed ? 'Completa' : 'Incompleta'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tarefas;
