
import APIClient from './apiClient';
import Book from './models/Book';
import Chapter from './models/Chapter';
import Movie from './models/Movie';
import Quote from './models/Quote';
import { ClientOptions, EntityFetchResponse, RequestOptions } from './types';


export class TheOneClient {
  apiClient: APIClient

  constructor(clientOptions: ClientOptions) {
    this.apiClient = new APIClient({
      token: clientOptions.accessToken,
      apiVersion: clientOptions.apiVersion
    })
  }

  async #doGet<T>(route: string): Promise<EntityFetchResponse<T>> {
    try {
      const res = await this.apiClient.get<T>(route)
      if (!res?.success) {
        throw new Error(res?.message)
      }
      return {
        data: res.docs!,
        total: res.total!,
        limit: res.limit!,
        offset: res.offset!,
        page: res.page!,
        pages: res.pages!,
      }
    } catch (err: any) {
      return {
        data: null,
        error: err?.message,
        total: 0,
        limit: 0,
        offset: 0,
        page: 0,
        pages: 0,
      }
    }
  }

  books(options?: RequestOptions): EntityFetchResponse<Book[]> {
    return this.#doGet<Book[]>('/book')
  }

  book(id: string, options?: RequestOptions): EntityFetchResponse<Book[]> {

  }

  movies(options?: RequestOptions): EntityFetchResponse<Movie[]> {

  }

  movie(id: string, options?: RequestOptions): EntityFetchResponse<Movie[]> {

  }

  quotes(options?: RequestOptions): EntityFetchResponse<Quote[]> {

  }

  quote(id: string, options?: RequestOptions): EntityFetchResponse<Quote[]> {

  }

  chapters(options: RequestOptions): EntityFetchResponse<Chapter[]> {

  }

  chapter(id: string, options: RequestOptions): EntityFetchResponse<Chapter[]> {

  }
}