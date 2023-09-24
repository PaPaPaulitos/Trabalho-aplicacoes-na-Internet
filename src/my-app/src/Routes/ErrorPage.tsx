import React from 'react';
import GlobalStyle from '../Styles/global';
import "../Styles/errorPage.css"


function ErrorPage() {
  return (
    <div>
      <h2 className="mensagem">
        <span id="erro">Erro</span>
        <span id="numero"> 404</span>
      </h2>
      <p className="descricao">Infelizmente a rota que você digitou não pode ser encontrada ou você não tem acesso a ela.</p>
      <GlobalStyle />
    </div>
  );
}

export default ErrorPage;