import { TheOneClient } from "./dist/index";

const client = new TheOneClient({
  accessToken: process.env.ACCESS_TOKEN!,
  apiVersion: "v2",
});

async function main() {
  const books = await client.books();
  console.log("books: ", books);
  const movies = await client.movies();
  console.log("movies: ", movies);
}

main();
