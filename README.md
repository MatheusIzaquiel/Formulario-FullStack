# Formulario-FullStack

## Visão geral

Este repositório contém um projeto **full stack** baseado em **Next.js com TypeScript** para criar e gerenciar formulários de forma responsiva e conectada entre frontend e backend. O projeto foi iniciado a partir de um template de aplicação Next.js e pode ser usado como base para interfaces que capturam dados, enviam para um backend e exibem os dados cadastrados. O código segue a estrutura padrão do Next.js com a pasta `app` para rotas e páginas, e outras pastas como `lib`, `middlewares` e `services` para lógica adicional e organização da aplicação. O projeto é útil para aprender conceitos de aplicações full stack com React e Next.js, integração de formulários e tratamento de dados no lado do servidor.

## Tecnologias

Este projeto utiliza as seguintes tecnologias e ferramentas:

- Next.js (framework React para aplicações full stack)
- React
- TypeScript
- CSS
- Vercel (para deploy)
- Estrutura de pastas padrão do Next.js com `app`, `lib`, `middlewares` e `services`

## Pré-requisitos

Antes de executar o projeto localmente é necessário ter:

1. Node.js instalado (versão recomendada LTS).
2. npm ou yarn como gerenciador de pacotes.
3. Editor de código com suporte a TypeScript e Next.js.

## Instalação

Siga os passos abaixo para configurar o projeto em sua máquina:

1. Clone o repositório:
git clone https://github.com/MatheusIzaquiel/Formulario-FullStack.git

2. Acesse a pasta do projeto:
cd Formulario-FullStack

3. Instale as dependências:
npm install

## Como executar

Para iniciar o servidor de desenvolvimento, execute:
npm run dev

Após iniciar, a aplicação ficará disponível em um endereço local como `http://localhost:3000` (conforme o log exibido no terminal). Abra o navegador para visualizar e interagir com os formulários e páginas da aplicação.

## Estrutura do projeto

A estrutura principal inclui:

- **app/**: Contém as rotas e páginas da aplicação Next.js.
- **lib/**: Utilitários e funções auxiliares.
- **middlewares/**: Lógicas intermediárias de requisição/resposta (por exemplo, validações).
- **services/**: Lógica de serviços, chamadas de API ou integração com backend.
- **next.config.ts**: Configurações do Next.js.
- **tsconfig.json**: Configurações do TypeScript.

### Componentes importantes

- **Formulário principal**: Página que captura os dados do usuário e envia para processamento.
- **Serviços de envio**: Lógica que processa os dados enviados pelo formulário.
- **Middleware (se houver)**: Validação ou manipulação de requisições antes do processamento.

## Fluxo esperado da aplicação

1. O usuário acessa a página principal do formulário.
2. Preenche os campos obrigatórios e submete o formulário.
3. O frontend envia os dados para um endpoint (API externa) para processamento.
4. Os dados são validados, persistidos ou processados conforme a lógica definida no backend.
5. O usuário recebe feedback do envio (sucesso ou erro) e pode ver os dados cadastrados ou redirecionar para outra página.

## Endpoints (exemplo de integração com backend)

| Método | Rota                  | Descrição                                    |
|--------|------------------------|-------------------------------------------------------------------|
| POST   | `/auth/register`       | Recebe dados do formulário e salva no Database                    |
| POST   | `/auth/login`          | Usuário faz login com email e senha para acesso                   |
| GET    | `/auth/profile`        | Verifica o token fornecido e conecta o usuário a uma rota privada |



## Boas práticas

- Separe a lógica de apresentação da lógica de negócios dentro de `services`.
- Adicione validação de entradas do usuário no frontend e no backend.
- Se for persistir dados, utilize um banco de dados apropriado com um ORM ou biblioteca de sua escolha.
- Documente os endpoints da API usando Swagger ou similares para facilitar uso futuro.
- Mantenha os tipos do TypeScript alinhados com as rotas e dados esperados.

## Deploy

A forma mais simples de fazer o deploy desta aplicação é usando **Vercel**, que possui integração nativa com projetos Next.js. Para isso:

1. Conecte o repositório ao Vercel.
2. Configure variáveis de ambiente caso necessário.
3. Faça o deploy e a plataforma cuidará da build automática e hospedagem.

## Licença

Verifique se há um arquivo `LICENSE` no repositório para detalhes sobre os termos de uso e distribuição do código.

## Contribuição

Para contribuir com melhorias, sugestões de recursos ou correções, abra *issues* ou crie *pull requests* no repositório no GitHub.

