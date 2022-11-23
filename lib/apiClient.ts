type APIResponse<T> = {
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
  #token: string;
  #apiVersion: string

  constructor({ token, apiVersion }: { token: string, apiVersion?: string }) {
    this.#token = token
    this.#apiVersion = apiVersion || 'v2'
  }

  get #baseUrl() {
    return `https://the-one-api.dev/${this.#apiVersion}`
  }

  get #headers() {
    return { authorization: `Bearer ${this.#token}` }
  }

  async get<T>(route: string): Promise<APIResponse<T>> {
    const res = await fetch(
      `${this.#baseUrl}${route}`,
      {
        headers: this.#headers,
      }
    )
    return res.json()
  }
}


export default APIClient