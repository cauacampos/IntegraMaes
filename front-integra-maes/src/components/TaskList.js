import React, { useState } from 'react';
import './TaskList.css';

const TaskList = () => {
  const [task, setTask] = useState(''); // Para armazenar o nome da nova tarefa
  const [tasks, setTasks] = useState([]); // Para armazenar as tarefas

  // Função para adicionar uma nova tarefa
  const addTask = () => {
    if (task.trim() === '') return; // Evita adicionar tarefas vazias
    setTasks([...tasks, task]); // Adiciona a nova tarefa à lista
    setTask(''); // Limpa o campo de entrada
  };

  // Função para deletar uma tarefa
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index); // Remove a tarefa pelo índice
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Agenda de Tarefas</h1>

      {/* Campo de input para nova tarefa */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)} // Atualiza o estado com o texto digitado
        placeholder="Digite sua tarefa"
      />
      <button onClick={addTask}>Adicionar Tarefa</button>

      {/* Lista de tarefas */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}{' '}
            <button onClick={() => deleteTask(index)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
