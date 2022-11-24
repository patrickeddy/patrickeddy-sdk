import TheOneClient from "./lib";

async function main() {
  // client
  const client = new TheOneClient({
    accessToken: process.env.ACCESS_TOKEN!,
    apiVersion: "v2",
  });

  // books
  await client.books();
  await client.book("5cf5805fb53e011a64671582");
  await client.bookChapters("5cf5805fb53e011a64671582");

  // movies
  await client.movies();
  await client.movie("5cd95395de30eff6ebccde56");
  await client.movieQuotes("5cd95395de30eff6ebccde56");

  // characters
  await client.characters();
  await client.character("5cd99d4bde30eff6ebccfbbe");
  await client.characterQuotes("5cd99d4bde30eff6ebccfbbe");

  // quotes
  await client.quotes();
  await client.quote("5cd96e05de30eff6ebcce7e9");

  // chapters
  await client.chapters();
  await client.chapter("6091b6d6d58360f988133b8b");

  // pagination
  await client.characters({ limit: 100 });
  await client.characters({ page: 2 });
  await client.characters({ offset: 3 });

  // sorting
  await client.characters({ sort: { name: "asc" } });
  await client.quotes({ sort: { character: "desc" } });

  // filtering
  await client.characters({ match: { name: "Gandalf" } });
  await client.characters({ notMatch: { name: "Gandalf" } });
  await client.characters({ include: { race: ["Hobbit", "Human"] } });
  await client.characters({ exclude: { race: ["Orc", "Goblin"] } });
  await client.characters({ exists: ["name"] });
  await client.characters({ notExist: ["name"] });
  await client.characters({ regex: { name: "/foot/i" } });
  await client.characters({ notRegex: { name: "/foot/i" } });

  // comparison
  await client.movies({ lt: { budgetInMillions: 100 } });
  await client.movies({ gt: { academyAwardWins: 0 } });
  await client.movies({ gte: { runtimeInMinutes: 160 } });
}

main();
