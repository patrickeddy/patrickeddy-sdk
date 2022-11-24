# The One - JS SDK

## Getting Started

1. [Get an API access token.](https://the-one-api.dev/sign-up)
1. Configure your project

```bash
npm install @theone/js
```

```typescript
// the-one.js
import TheOneClient from '@theone/js';
export const theOneClient = new TheOneClient({
  accessToken: process.env.ACCESS_TOKEN // set your access token as an environment variable: https://nodejs.dev/en/learn/how-to-read-environment-variables-from-nodejs/
  apiVersion: 'v2', // optional - api version
});
```

Now use your newly instantiated client:

```typescript
import { theOneClient } from "./the-one";
const books = await theOneClient.books();
```

## Available client methods

[Take a look at the example to see the available methods.](./example.ts)

SDK is written in Typescript

## Development

1. Clone repo and install dependencies

```bash
git clone <repo URI here>
cd theonesdk
npm i
```

2. Test Driven Development (TDD)

```bash
npm run test:watch
```

3. Publish updates to NPM

```bash
npm run deploy
```
