## React + TypeScript + Webpack

Boilerplate for a project using React, Typescript, Webpack + Babel, ESLint + Prettier and Styled-components.

## Installation

Use a package manager of your choice (npm, yarn, etc.) in order to install all dependencies

```bash
yarn
# or
npm install
```

## Usage

**Run the project in development mode:**

```bash
yarn dev
# or
npm run dev
```

**Deploy the project:**

To deploy the application you need to have installed `docker` and `docker-compose` in your machine. After you need to have a `docker-hub` account and make login:

```bash
docker login
```

After login, run the command:

```bash
yarn build:server
```
