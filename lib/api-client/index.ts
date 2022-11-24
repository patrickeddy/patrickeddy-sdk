import { RequestOptions } from "../types";
import { getQueryParamString } from "./util";

const isDebug = process.env.DEBUG === "true";

export type APIResponse<T> = {
  docs?: T;
  total?: number;
  limit?: number;
  offset?: number;
  page?: number;
  pages?: number;
  success?: boolean;
  message?: string;
};

class APIClient {
  ready: boolean = false;
  #token: string = "";
  #apiVersion: string = "v2";

  init({ token, apiVersion }: { token: string; apiVersion?: string }) {
    this.#token = token;
    this.#apiVersion = apiVersion || "v2";
    this.ready = true;
  }

  get baseUrl() {
    return `https://the-one-api.dev/${this.#apiVersion}`;
  }

  get #headers() {
    return this.#token ? { authorization: `Bearer ${this.#token}` } : undefined;
  }

  async get<T>(
    route: string,
    options?: RequestOptions
  ): Promise<APIResponse<T>> {
    const paramString = getQueryParamString(options);

    if (!this.ready) {
      throw new Error("apiClient not initialized");
    }
    const url = `${this.baseUrl}${route}${paramString}`;

    if (isDebug) {
      console.log(`\nURL: ${url}`);
    }

    const res = await fetch(url, { headers: this.#headers });

    if (res.status >= 400) {
      return { success: false, message: await res.text() };
    }

    const body = (await res.json()) as APIResponse<T>;
    if (isDebug) {
      console.log(`${JSON.stringify(body)}\n`);
    }
    return body;
  }
}

const apiClient = new APIClient();

export default apiClient;
