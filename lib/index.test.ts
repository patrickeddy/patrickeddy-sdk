import fetchMock from "fetch-mock";
import apiClient from "./apiClient";
import { TheOneClient } from "./index";

describe("Book", () => {
  let client: TheOneClient;

  beforeEach(() => {
    client = new TheOneClient({ accessToken: "" });
    fetchMock.restore();
  });

  describe("LIST books", () => {
    it("success", async () => {
      fetchMock.getOnce(`${apiClient.baseUrl}/book`, {
        status: 200,
        body: { docs: [{ _id: "1" }, { _id: "2" }] },
      });
      expect(await client.books()).toEqual(
        expect.objectContaining({ data: [{ _id: "1" }, { _id: "2" }] })
      );
    });

    it("error", async () => {
      fetchMock.getOnce(`${apiClient.baseUrl}/book`, {
        status: 500,
        body: "server error",
      });
      return expect(() => client.books()).rejects.toThrow("server error");
    });
  });

  describe("GET a book", () => {
    it("GET a book", async () => {
      fetchMock.getOnce(`${apiClient.baseUrl}/book/1`, {
        status: 200,
        body: { docs: [{ _id: "1" }] },
      });
      expect(await client.book("1")).toEqual(
        expect.objectContaining({ data: [{ _id: "1" }] })
      );
    });

    it("error", async () => {
      fetchMock.getOnce(`${apiClient.baseUrl}/book/1`, {
        status: 500,
        body: "server error",
      });
      return expect(() => client.book("1")).rejects.toThrow("server error");
    });
  });

  describe("LIST book chapters", () => {
    it("success", async () => {
      fetchMock.getOnce(`${apiClient.baseUrl}/book/1/chapter`, {
        status: 200,
        body: { docs: [{ _id: "1" }, { _id: "2" }] },
      });
      expect(await client.bookChapters("1")).toEqual(
        expect.objectContaining({ data: [{ _id: "1" }, { _id: "2" }] })
      );
    });

    it("error", async () => {
      fetchMock.getOnce(`${apiClient.baseUrl}/book/1/chapter`, {
        status: 500,
        body: "server error",
      });
      return expect(() => client.bookChapters("1")).rejects.toThrow(
        "server error"
      );
    });
  });
});

describe("Movie", () => {
  let client: TheOneClient;

  beforeEach(() => {
    client = new TheOneClient({ accessToken: "" });
    fetchMock.restore();
  });

  describe("LIST movies", () => {
    it("LIST movies", async () => {
      fetchMock.getOnce(`${apiClient.baseUrl}/movie`, {
        status: 200,
        body: { docs: [{ _id: "1" }, { _id: "2" }] },
      });
      expect(await client.movies()).toEqual(
        expect.objectContaining({ data: [{ _id: "1" }, { _id: "2" }] })
      );
    });

    it("error", async () => {
      fetchMock.getOnce(`${apiClient.baseUrl}/movie`, {
        status: 500,
        body: "server error",
      });
      return expect(() => client.movies()).rejects.toThrow("server error");
    });
  });

  describe("GET a movie", () => {
    it("success", async () => {
      fetchMock.getOnce(`${apiClient.baseUrl}/movie/1`, {
        status: 200,
        body: { docs: [{ _id: "1" }] },
      });
      expect(await client.movie("1")).toEqual(
        expect.objectContaining({ data: [{ _id: "1" }] })
      );
    });

    it("error", async () => {
      fetchMock.getOnce(`${apiClient.baseUrl}/movie/1`, {
        status: 500,
        body: "server error",
      });
      return expect(() => client.movie("1")).rejects.toThrow("server error");
    });
  });
});

describe("Quote", () => {
  let client: TheOneClient;

  beforeEach(() => {
    client = new TheOneClient({ accessToken: "" });
    fetchMock.restore();
  });

  describe("LIST quotes", () => {
    it("success", async () => {
      fetchMock.getOnce(`${apiClient.baseUrl}/quote`, {
        status: 200,
        body: { docs: [{ _id: "1" }, { _id: "2" }] },
      });
      expect(await client.quotes()).toEqual(
        expect.objectContaining({ data: [{ _id: "1" }, { _id: "2" }] })
      );
    });

    it("error", async () => {
      fetchMock.getOnce(`${apiClient.baseUrl}/quote`, {
        status: 500,
        body: "server error",
      });
      return expect(() => client.quotes()).rejects.toThrow("server error");
    });
  });

  describe("GET a quote", () => {
    it("success", async () => {
      fetchMock.getOnce(`${apiClient.baseUrl}/quote/1`, {
        status: 200,
        body: { docs: [{ _id: "1" }] },
      });
      expect(await client.quote("1")).toEqual(
        expect.objectContaining({ data: [{ _id: "1" }] })
      );
    });

    it("error", async () => {
      fetchMock.getOnce(`${apiClient.baseUrl}/quote/1`, {
        status: 500,
        body: "server error",
      });
      return expect(() => client.quote("1")).rejects.toThrow("server error");
    });
  });
});

describe("Character", () => {
  let client: TheOneClient;

  beforeEach(() => {
    client = new TheOneClient({ accessToken: "" });
    fetchMock.restore();
  });

  describe("LIST characters", () => {
    it("success", async () => {
      fetchMock.getOnce(`${apiClient.baseUrl}/character`, {
        status: 200,
        body: { docs: [{ _id: "1" }, { _id: "2" }] },
      });
      expect(await client.characters()).toEqual(
        expect.objectContaining({ data: [{ _id: "1" }, { _id: "2" }] })
      );
    });

    it("error", async () => {
      fetchMock.getOnce(`${apiClient.baseUrl}/character`, {
        status: 500,
        body: "server error",
      });
      return expect(() => client.characters()).rejects.toThrow("server error");
    });
  });

  describe("GET a character", () => {
    it("success", async () => {
      fetchMock.getOnce(`${apiClient.baseUrl}/character/1`, {
        status: 200,
        body: { docs: [{ _id: "1" }] },
      });
      expect(await client.character("1")).toEqual(
        expect.objectContaining({ data: [{ _id: "1" }] })
      );
    });

    it("error", async () => {
      fetchMock.getOnce(`${apiClient.baseUrl}/character/1`, {
        status: 500,
        body: "server error",
      });
      return expect(() => client.character("1")).rejects.toThrow(
        "server error"
      );
    });
  });
});

describe("Chapter", () => {
  let client: TheOneClient;

  beforeEach(() => {
    client = new TheOneClient({ accessToken: "" });
    fetchMock.restore();
  });

  describe("LIST chapters", () => {
    it("success", async () => {
      fetchMock.getOnce(`${apiClient.baseUrl}/chapter`, {
        status: 200,
        body: { docs: [{ _id: "1" }, { _id: "2" }] },
      });
      expect(await client.chapters()).toEqual(
        expect.objectContaining({ data: [{ _id: "1" }, { _id: "2" }] })
      );
    });

    it("error", async () => {
      fetchMock.getOnce(`${apiClient.baseUrl}/chapter`, {
        status: 500,
        body: "server error",
      });
      return expect(() => client.chapters()).rejects.toThrow("server error");
    });
  });

  describe("GET a chapter", () => {
    it("success", async () => {
      fetchMock.getOnce(`${apiClient.baseUrl}/chapter/1`, {
        status: 200,
        body: { docs: [{ _id: "1" }] },
      });
      expect(await client.chapter("1")).toEqual(
        expect.objectContaining({ data: [{ _id: "1" }] })
      );
    });

    it("error", async () => {
      fetchMock.getOnce(`${apiClient.baseUrl}/chapter/1`, {
        status: 500,
        body: "server error",
      });
      return expect(() => client.chapter("1")).rejects.toThrow("server error");
    });
  });
});
