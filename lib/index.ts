import Book from "./api-models/Book";
import Chapter from "./api-models/Chapter";
import Character from "./api-models/Character";
import Movie from "./api-models/Movie";
import Quote from "./api-models/Quote";
import apiClient from "./apiClient";
import { ClientOptions, EntityFetchResponse, RequestOptions } from "./types";

export class TheOneClient {
  constructor(clientOptions: ClientOptions) {
    // initialize our internal apiClient
    apiClient.init({
      token: clientOptions.accessToken,
      apiVersion: clientOptions.apiVersion,
    });
  }

  async #doGet<T>(
    route: string,
    options?: RequestOptions
  ): Promise<EntityFetchResponse<T>> {
    const res = await apiClient.get<T>(route, options);
    if (!res?.docs && !res?.success) {
      throw new Error(res?.message);
    }
    return {
      data: res.docs!,
      total: res.total!,
      limit: res.limit!,
      offset: res.offset!,
      page: res.page!,
      pages: res.pages!,
    };
  }

  async books(options?: RequestOptions): Promise<EntityFetchResponse<Book[]>> {
    return this.#doGet<Book[]>("/book", options);
  }

  async book(
    id: string,
    options?: RequestOptions
  ): Promise<EntityFetchResponse<Book[]>> {
    return this.#doGet<Book[]>(`/book/${id}`, options);
  }

  async bookChapters(
    bookId: string,
    options?: RequestOptions
  ): Promise<EntityFetchResponse<Chapter[]>> {
    return this.#doGet<Chapter[]>(`/book/${bookId}/chapter`, options);
  }

  async movies(
    options?: RequestOptions
  ): Promise<EntityFetchResponse<Movie[]>> {
    return this.#doGet<Movie[]>(`/movie`, options);
  }

  async movie(
    id: string,
    options?: RequestOptions
  ): Promise<EntityFetchResponse<Movie[]>> {
    return this.#doGet<Movie[]>(`/movie/${id}`, options);
  }

  async movieQuotes(
    movieId: string,
    options?: RequestOptions
  ): Promise<EntityFetchResponse<Quote[]>> {
    return this.#doGet<Quote[]>(`/movie/${movieId}/quote`, options);
  }

  async characters(
    options?: RequestOptions
  ): Promise<EntityFetchResponse<Character[]>> {
    return this.#doGet<Character[]>(`/character`, options);
  }

  async character(
    id: string,
    options?: RequestOptions
  ): Promise<EntityFetchResponse<Character[]>> {
    return this.#doGet<Character[]>(`/character/${id}`, options);
  }

  async characterQuotes(
    characterId: string,
    options?: RequestOptions
  ): Promise<EntityFetchResponse<Quote[]>> {
    return this.#doGet<Quote[]>(`/character/${characterId}/quote`, options);
  }

  async quotes(
    options?: RequestOptions
  ): Promise<EntityFetchResponse<Quote[]>> {
    return this.#doGet<Quote[]>(`/quote`, options);
  }

  async quote(
    id: string,
    options?: RequestOptions
  ): Promise<EntityFetchResponse<Quote[]>> {
    return this.#doGet<Quote[]>(`/quote/${id}`, options);
  }

  async chapters(
    options?: RequestOptions
  ): Promise<EntityFetchResponse<Chapter[]>> {
    return this.#doGet<Chapter[]>(`/chapter`, options);
  }

  async chapter(
    id: string,
    options?: RequestOptions
  ): Promise<EntityFetchResponse<Chapter[]>> {
    return this.#doGet<Chapter[]>(`/chapter/${id}`, options);
  }
}
