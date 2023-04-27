# React Architecture

O projeto React Architecture é uma estrutura de projeto para aplicações React multi-módulo baseadas na arquitetura de componentes criada pelo desenvolvedor Tiago Guizelini. 

A estrutura foi pensada/criada para fornecer uma abordagem consistente e eficiente para o desenvolvimento de aplicações React complexas, ajudando as equipes a organizar seu código, melhorar a reutilização de código e criar aplicações escaláveis e testáveis, onde uma arquitetura bem planejada é essencial para garantir a manutenibilidade e a escalabilidade da aplicação.

### Estrutura de diretórios

A estrutura de diretórios recomendada pelo projeto React Architecture segue o padrão "feature-based", ou seja, cada funcionalidade da aplicação é organizada em um diretório separado. Cada diretório contém todos os componentes, estilos e lógica relacionados àquela funcionalidade.

Para isso, o projeto utiliza:

- Clean Architecture como estrutura para organizar para cada feature module
- Custom hooks como por exemplo o "UseApi", para fazer a comunicação HTTP com o backend 
- Theme fácil de customizar
- Um módulo isolado só para o Design System, onde voce cria e mantém todos os componentes que serão utilizados pela aplicação e que podem ser até compartilhados com outros projetos
- Module SDK que funciona como um Core/Commons, centralizando configurações, helpers, gerenciamento de rodas e muito mais!
