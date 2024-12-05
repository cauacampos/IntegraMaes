import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login"; // Aqui você importa o componente de login ou outro
import Home from './components/Home';
import Register from "./components/Register";
import TaskList from "./components/TaskList";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} /> {     }
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/taskList" element={<TaskList />} />
      
    </Routes>
  </BrowserRouter>
);
