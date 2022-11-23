
# The One SDK

## Getting Started

1. [Get an API access token.](https://the-one-api.dev/sign-up)
2. Pass that access token as a parameter to the SDK config:

```typescript
// the-one.js
import { TheOneClient } from '@theone/js';
export const theOneClient = new TheOneClient({
  accessToken: process.env.ACCESS_TOKEN // set your access token as an environment variable: https://nodejs.dev/en/learn/how-to-read-environment-variables-from-nodejs/
  apiVersion: 'v2', // optional - api version
});
```

3. Use your newly instantiated client

```typescript
import { theOneClient } from './the-one';
const lotrBooks = await theOneClient.books()
```

## Entities

### `Response`

```typescript
interface Response<T> {
  data: T;
  error?: string;
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
}
```

### `Options`

```typescript
interface Options {
  // pagination
  total: number;
  limit: number;
  offset: number;
  page: number;
  // sorting
  sort: Record<string, 'asc' | 'desc'>;
  // filters
  match: Record<string, any>;
  negateMatch: Record<string, any>;
  include: Record<string, any>;
  exclude: Record<string, any>;
  exists: Record<string, any>;
  doesntExist: Record<string, any>;
  regex: Record<string, string>;
  lt: Record<string,number>;
  gt: Record<string, number>;
  gte: Record<string, number>;
}
```

### `Book`

```typescript
interface Book {
  id: string;
  name: string;
}
```

### `Movie`

```typescript
interface Book {
  id: string;
  name: string;
  runtimeInMinutes: number;
  budgetInMillions: number;
  boxOfficeRevenueInMillions: number;
  academyAwardNominations: number;
  academyAwardWins: number;
  rottenTomatoesScore: number;
}
```

### `Character`

```typescript
interface Character {
  id: string;
  height: string;
  race: string;
  gender: string;
  birth: string;
  spouse: string;
  death: string;
  realm: string;
  hair: string;
  name: string;
  wikiUrl: string;
}
```

### `Quote`

```typescript
interface Quote {
  id: string;
  dialog: string;
  movie: string;
  character: string;
  id: string;
}
```

### `Chapter`

```typescript
interface Chapter {
  id: string;
  book: string;
  chapterName: string;
}
```

## Available client methods

### `.books(options?: Options)`

Fetches all books.

```typescript
theOneClient.books({ limit: 4 }) // Response<Book[]>
```

### `.books(id: string, options?: Options)`

Fetches a specific book.

```typescript
theOneClient.book('5cf5805fb53e011a64671582') // Response<Book[]>
```

### `.movies(options?: Options)`

List all movies.

```typescript
theOneClient.movies({ limit: 4 }) // Response<Movie[]>
```

### `.movies(id: string, options?: Options)`

Get a specific movie.

```typescript
theOneClient.movie('5cd95395de30eff6ebccde56') // Response<Movie[]>
```

### `.movies(id: string, options?: Options).quotes()`

List quotes from a specific movie (only works for the trilogy).

```typescript
theOneClient.movie('5cd95395de30eff6ebccde56').quotes() // Response<Quote[]>
```

### `.characters(options?: Options)`

List characters.

```typescript
theOneClient.characters({ limit: 4 }) // Response<Character[]>
```


### `.quotes(options?: Options)`

List quotes.

```typescript
const quotes = await theOneClient.quotes({ limit: 4 }) // Response<Quote[]>
```

### `.quotes(options?: Options)`

Get specific quote.

```typescript
const quote = await theOneClient.quote('5cd96e05de30eff6ebcce7e9') // Response<Quote[]>
```

### `.chapters(options?: Options)`

List chapters.

```typescript
const chapters = await theOneClient.chapters({ limit: 4 }) // Response<Chapter[]>
```

### `.chapters(string id)`

Get a specific chapter.

```typescript
const chapters = await theOneClient.chapter('6091b6d6d58360f988133b8b')
```