import fetchMock from "fetch-mock";
import apiClient from "./apiClient";
import { TheOneClient } from "./index";

describe("Book", () => {
  let client: TheOneClient;

  beforeEach(() => {
    client = new TheOneClient({ accessToken: "" });
    fetchMock.restore();
  });

  it("LIST books", async () => {
    fetchMock.getOnce(`${apiClient.baseUrl}/book`, {
      status: 200,
      body: { docs: [{ _id: "1" }, { _id: "2" }] },
    });
    expect(await client.books()).toEqual(
      expect.objectContaining({ data: [{ _id: "1" }, { _id: "2" }] })
    );
  });

  it("GET a book", async () => {
    fetchMock.getOnce(`${apiClient.baseUrl}/book/1`, {
      status: 200,
      body: { docs: [{ _id: "1" }] },
    });
    expect(await client.book("1")).toEqual(
      expect.objectContaining({ data: [{ _id: "1" }] })
    );
  });
});

describe("Movie", () => {
  let client: TheOneClient;

  beforeEach(() => {
    client = new TheOneClient({ accessToken: "" });
    fetchMock.restore();
  });

  it("LIST movies", async () => {
    fetchMock.getOnce(`${apiClient.baseUrl}/movie`, {
      status: 200,
      body: { docs: [{ _id: "1" }, { _id: "2" }] },
    });
    expect(await client.movies()).toEqual(
      expect.objectContaining({ data: [{ _id: "1" }, { _id: "2" }] })
    );
  });

  it("GET a movie", async () => {
    fetchMock.getOnce(`${apiClient.baseUrl}/movie/1`, {
      status: 200,
      body: { docs: [{ _id: "1" }] },
    });
    expect(await client.movie("1")).toEqual(
      expect.objectContaining({ data: [{ _id: "1" }] })
    );
  });
});

describe("Quote", () => {
  let client: TheOneClient;

  beforeEach(() => {
    client = new TheOneClient({ accessToken: "" });
    fetchMock.restore();
  });

  it("LIST quotes", async () => {
    fetchMock.getOnce(`${apiClient.baseUrl}/quote`, {
      status: 200,
      body: { docs: [{ _id: "1" }, { _id: "2" }] },
    });
    expect(await client.quotes()).toEqual(
      expect.objectContaining({ data: [{ _id: "1" }, { _id: "2" }] })
    );
  });

  it("GET a quote", async () => {
    fetchMock.getOnce(`${apiClient.baseUrl}/quote/1`, {
      status: 200,
      body: { docs: [{ _id: "1" }] },
    });
    expect(await client.quote("1")).toEqual(
      expect.objectContaining({ data: [{ _id: "1" }] })
    );
  });
});

describe("Character", () => {
  let client: TheOneClient;

  beforeEach(() => {
    client = new TheOneClient({ accessToken: "" });
    fetchMock.restore();
  });

  it("LIST characters", async () => {
    fetchMock.getOnce(`${apiClient.baseUrl}/character`, {
      status: 200,
      body: { docs: [{ _id: "1" }, { _id: "2" }] },
    });
    expect(await client.characters()).toEqual(
      expect.objectContaining({ data: [{ _id: "1" }, { _id: "2" }] })
    );
  });

  it("GET a character", async () => {
    fetchMock.getOnce(`${apiClient.baseUrl}/character/1`, {
      status: 200,
      body: { docs: [{ _id: "1" }] },
    });
    expect(await client.character("1")).toEqual(
      expect.objectContaining({ data: [{ _id: "1" }] })
    );
  });
});

describe("Chapter", () => {
  let client: TheOneClient;

  beforeEach(() => {
    client = new TheOneClient({ accessToken: "" });
    fetchMock.restore();
  });

  it("LIST chapters", async () => {
    fetchMock.getOnce(`${apiClient.baseUrl}/chapter`, {
      status: 200,
      body: { docs: [{ _id: "1" }, { _id: "2" }] },
    });
    expect(await client.chapters()).toEqual(
      expect.objectContaining({ data: [{ _id: "1" }, { _id: "2" }] })
    );
  });

  it("GET a chapter", async () => {
    fetchMock.getOnce(`${apiClient.baseUrl}/chapter/1`, {
      status: 200,
      body: { docs: [{ _id: "1" }] },
    });
    expect(await client.chapter("1")).toEqual(
      expect.objectContaining({ data: [{ _id: "1" }] })
    );
  });
});
