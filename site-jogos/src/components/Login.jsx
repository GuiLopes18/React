import React from 'react';

function Login() {
  return (
    <main>
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <label>
            Nome:
            <input type="text" name="name" />
          </label>
          <label>
            Senha:
            <input type="password" name="password" />
          </label>
          <button type="submit">Confirmar</button>
        </form>
      </div>
    </main>
  );
}

export default Login;
