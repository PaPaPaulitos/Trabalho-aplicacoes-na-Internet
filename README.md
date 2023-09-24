# Aplicações na Internet

## Como incializar o projeto

- Dê commit no Repósitorio

```bash
https://github.com/PaPaPaulitos/Trabalho-aplicacoes-na-Internet.git
```

- Entre no diretório

```bash
\Trabalho-aplicacoes-na-Internet\src\my-app
```

- Cole o comando:

```bash
npm i
```

- Agora inicie usando:

```bash
npm start
```


## Minimundo

Um grupo de 4 amigos se juntou para criar uma Startup de eventos para todos os tipos de públicos, sendo esses eventos online e presenciais. A fonte de renda da empresa são os anúncios que estão na plataforma, não sendo cobrado para colocar eventos no site, e os eventos não precisam ser feitos por empresas, só precisam ser feitos pelos usuários cadastrados no site.

---

## Tecnologias 

- Docker
- TypeScript
- Node.JS
- React
- Bootstrap

## Bibliotecas
- react
- react-boostrap
- react-router-dom
- styled-components
- react-bootstrap-icons

## Ferramentas de documentação

- Figma
- Whimsical

---

## Diagrama de Navegabilidade

Você pode ver o diagrama melhor [Clicando aqui](https://whimsical.com/a1-aplicacoes-na-internet-5N2p2ibDLr4qS6VYoSk27h)

![Diagrama de Navegabilidade](./Imagens/A1_Aplicações_na_Internet.png)

---

## Telas da aplicação

### Pagina Inicial

Você pode ver melhor as telas do evento [Clicando aqui](https://www.figma.com/file/AMb6NqrFlXpZQ2nmInx25k/A1_aplica%C3%A7%C3%B5es-na-internet?type=design&node-id=9%3A27&mode=design&t=rliAOO6vqf8c0NGC-1)

![Página Inicial](./Imagens/Pagina%20Inicial.svg)

A página inicial será onde ficará exposto os eventos.

- O quadrado preto na *Navbar* é o logo da empresa(ainda a ser definido).

- O fundo preto atrás da pesquisa terá que ser um elemento *Carousel* do Bootstrap.

- A página terá um *Grid System* do Bootstrap com 3 colunas, onde os eventos será pegos do **Back-end** via API.

### Registro

![Registro](./Imagens/Register.svg)

- Tem que ser um *form* com *método HTTP Post*

### Login

![Login](./Imagens/Login.svg)

- Tem que ser um *form* com *método HTTP GET*

### Dashboard sem Eventos

![Dashboard sem Eventos](./Imagens/Dashboard_sem_eventos.svg)

### Dashboard

![Dashboard](./Imagens/Dashboard.svg)

- A *Div* **Eventos que estou Participando** terá uma *table* igual ao do **Meus Eventos**

### Crie seu Evento

![Crie seu Evento](./Imagens/Crie_seu_evento.svg)

- Tem que ser um *form* com *método HTTP Post*

### Descrição do Evento

![Descrição do Evento](./Imagens/Descrição_do_Evento.svg)

---

## Referencias

https://create-react-app.dev/docs/getting-started

https://create-react-app.dev/docs/adding-typescript/

https://blog.betrybe.com/react/react-bootstrap/#:~:text=O%20recomendado%20para%20utilização%20dos,%27react-bootstrap%2FButton%27%3B

https://www.youtube.com/watch?v=7b42lVMdEjE

https://react-icons.github.io/react-icons/icons?name=bs