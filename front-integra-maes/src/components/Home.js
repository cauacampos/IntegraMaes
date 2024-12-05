import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!loggedInUser) {
    navigate("/login");
    return null;
  }

  const goToTaskList = () => {
    navigate("/TaskList"); // Redireciona para a página de Tarefas
  };

  return (
    <div>
      <h2>Bem-vindo, {loggedInUser.email}!</h2>
      <button onClick={handleLogout}>Sair</button>
      <br />
      <button onClick={goToTaskList} style={{ marginTop: '10px' }}>
        Ir para a Agenda de Tarefas
      </button>
    </div>
  );
};

export default Home;
