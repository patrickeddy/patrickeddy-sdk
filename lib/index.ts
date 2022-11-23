import apiClient from "./apiClient";
import Book from "./models/Book";
import Chapter from "./models/Chapter";
import Movie from "./models/Movie";
import Quote from "./models/Quote";
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
    try {
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
    } catch (err: any) {
      return {
        data: null,
        error: err?.message,
        total: 0,
        limit: 0,
        offset: 0,
        page: 0,
        pages: 0,
      };
    }
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

  async characters(
    options?: RequestOptions
  ): Promise<EntityFetchResponse<Quote[]>> {
    return this.#doGet<Quote[]>(`/character`, options);
  }

  async character(
    id: string,
    options?: RequestOptions
  ): Promise<EntityFetchResponse<Quote[]>> {
    return this.#doGet<Quote[]>(`/character/${id}`, options);
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
