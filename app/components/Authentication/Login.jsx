import React from "react";

const clientId = 'da37f9b2070e3aad5719';

const Login = () => {

  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=http://localhost:8080/callback`;

  return (
    <div>
      <h1>This is the Login page</h1>
      <a href={githubAuthUrl}>
        <button>Login With Github</button>
      </a>
    </div>
  );
}

export default Login;