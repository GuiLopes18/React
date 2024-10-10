import React from 'react';
import './App.css';

const Login = () => {
  return (
    <div class="login-container">
      <div class="login-box">
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Usuário" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
