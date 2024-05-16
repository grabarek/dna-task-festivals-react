# Task project

## Prerequisites

- [Node.js](https://nodejs.org/en) v20

## Project structure

### web

Web application written in React (bootstrapped from [Create React App](https://github.com/facebook/create-react-app)). Runs on `http://localhost:3000`. Uses [React Redux Toolkit](https://redux-toolkit.js.org/) for state management.

### api 

Simple vanilla Node.js backend server for REST API. Runs on `http://localhost:8000`. Available endpoints:

- `/users/register` POST 

  Request: `{ email: string, password: string }`

  Response: `{ id: string, email: string, balance: number }`

  Error: `{ error: string }`

- `/users/login` POST

  Request: `{ email: string, password: string }`

  Response: `{ id: string, email: string, balance: number }`

  Error: `{ error: string }`

- `/users/acount/top-up`

  Request: `{ userId: string, amount: number }`

  Response: `{ newBalance: number }`

  Error: `{ error: string }`

### contract

Contains TypeScript type definitions shared by web and api.

## Scripts

- `npm run api` - start backend server (localhost:8000)
- `npm run web` - start web app server (localhost:3000)
- `npm run test` - run unit tests


## TO DO:
- onboarding process
- adapt desktop version and overall RWD
- add variables/mixins for breakpoints
- add linter and prettier
- add SCSS support (nesting, imports)
- change styling to css modules (scope isolation)
- change forms to reusable components
- change input fields to reusable components (styling, validation, placeholders)
- reorder imports order (alphabetical and functional order seperating libraries imports, absolute imports, relative imports, styling imports)