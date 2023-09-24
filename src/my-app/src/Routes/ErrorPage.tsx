import React from 'react';
import GlobalStyle from '../Styles/global';
import "../Styles/errorPage.css"


function ErrorPage() {
  return (
    <div>
      <h2>Erro 404</h2>
      <p>Infelizmente a rota que você digitou não pode ser encontrada ou você não tem acesso a ela.</p>
      <GlobalStyle />
    </div>
  );
}

export default ErrorPage;