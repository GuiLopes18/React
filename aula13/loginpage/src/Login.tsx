import React from 'react';
import './Login.css'; 

function Login() {
  return (
    <div className="login-page">
      <header className="header">
        <h1>Monitoria React</h1>
        <a href="/contact">Contato</a>
      </header>
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Usuário" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
