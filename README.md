# react-default-project

1. [Descrição](#1-descrição)
2. [Inicio rápido](#2-inicio-rápido)
3. [Componentes](#3-componentes)
4. [Pages](#4-pages)

## 1. Descrição

O react-default-project é um projeto React + TypeScript criado para ser a base de outros projetos, com components básicos já criados, configurações, testes e documentações geradas para facilitar o desenvolvimento do projeto.

Este projeto é codificado em [Javascript](<https://developer.mozilla.org/pt-BR/docs/Web/JavaScript>) e utiliza as tecnologias [React](<https://pt-br.reactjs.org/>) e [TypeScript](<https://www.typescriptlang.org/>).

## 2. Inicio rápido

Para executar o projeto, deve-se executar os comandos dentro do diretório raiz do projeto [/src].

O primeiro comando irá instalar todas as dependências necessárias para a execução do projeto.

``` bash
npm install ou npm i
```

O segundo comando realizará a execução deste projeto.

``` bash
npm start
```

Após executar este segundo comando abrirá um link no seu navegador, porém, caso não abra o link será:

```
http://localhost:3000/
```

Para executar os testes da aplicação será necessário executar o seguinte comenado:

``` bash
npm run test ou npm run test:coverage
```

A diferença entre os comandos de teste é que o :coverage mostrará a cobertura dos testes que para acessar basta ir na pasta /coverage/Icov-report e rodar o index.html.

Para executar o storybook será necessário executar o seguinte comando:

``` bash
npm run storybook
```

Após executar este comando abrirá um link no seu navegador, porém, caso não abra o link será:

```
http://localhost:6006/
```

## 3. Componentes

Este site possui os seguintes componentes:

| Componente      | Descrição               | Caminho                                          |
| --------------- | ----------------------- | ------------------------------------------------ |
| **_Button_**    | Componente de Button    | <react-default-project/src/components/Button>    |
| **_Card_**      | Componente de Card      | <react-default-project/src/components/Card>      |
| **_Header_**    | Componente de Header    | <react-default-project/src/components/Header>    |
| **_Image_**     | Componente de Image     | <react-default-project/src/components/Image>     |
| **_Input_**     | Componente de Input     | <react-default-project/src/components/Input>     |
| **_List_**      | Componente de List      | <react-default-project/src/components/List>      |
| **_SearchBar_** | Componente de SearchBar | <react-default-project/src/components/SearchBar> |
| **_Text_**      | Componente de Text      | <react-default-project/src/components/Text>      |
| **_Toggle_**    | Componente de Toggle    | <react-default-project/src/components/Toggle>    |


## 4. Pages


Este site possui as seguites paginas:

| Pagina     | Descrição      | Caminho                                |
| ---------- | -------------- | -------------------------------------- |
| **_Home_** | Pagina de Home | <react-default-project/src/pages/Home> |
