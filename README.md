# React Architecture

The React Architecture project is a design framework for multi-module React applications based on the component architecture created by Tiago Guizelini.

The framework was designed to provide a consistent and efficient approach to developing complex React applications, helping teams organize their code, improve code reuse and create scalable and testable applications, where a well-planned architecture is essential to ensure the maintainability and scalability of the application.

Directory structure
The directory structure recommended by the React Architecture project follows the "feature-based" pattern, that is, each application functionality is organized in a separate directory. Each directory contains all components, styles and logic related to that functionality.

To achieve this, the project uses:

- Clean Architecture as a structure to organize for each feature module
- Custom hooks, such as "UseApi", to carry out HTTP communication with the backend
- Easy to customize theme
- An isolated module just for the Design System, where you create and maintain all the components that will be used by the application and that can even be shared with other projects
- Module SDK that works like a Core/Commons, centralizing configurations, helpers, wheel management and much more!

------------------------------------------------------------------------------

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
