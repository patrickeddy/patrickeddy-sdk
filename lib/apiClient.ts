import { RequestOptions } from "./types";

export type APIResponse<T> = {
  docs?: T;
  total?: number;
  limit?: number;
  offset?: number;
  page?: number;
  pages?: number;
  success?: boolean;
  message?: string;
}

class APIClient {
  ready: boolean = false
  #token: string = ''
  #apiVersion: string = 'v2'

  init({ token, apiVersion }: { token: string, apiVersion?: string }) {
    this.#token = token
    this.#apiVersion = apiVersion || 'v2'
    this.ready = true
  }

  get baseUrl() {
    return `https://the-one-api.dev/${this.#apiVersion}`
  }

  get #headers() {
    return this.#token ? { authorization: `Bearer ${this.#token}` } : undefined
  }

  #parseOptions(options: RequestOptions) {
    //TODO: implement options parsing
  }

  async get<T>(route: string, options?: RequestOptions): Promise<APIResponse<T>> {
    if (!this.ready) {
      throw new Error('apiClient not initialized')
    }
    const res = await fetch(
      `${this.baseUrl}${route}`,
      {
        headers: this.#headers,
      }
    )
    return res.json() as APIResponse<T>
  }
}

const apiClient = new APIClient()

export default apiClient