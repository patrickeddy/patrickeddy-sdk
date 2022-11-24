import { RequestOptions } from "../types";

export const getQueryParamString = (options?: RequestOptions) => {
  if (!options) {
    return "";
  }

  const params = new URLSearchParams();
  if (options.limit) {
    params.set("limit", String(options.limit));
  }
  if (options.page) {
    params.set("page", String(options.page));
  }
  if (options.offset) {
    params.set("offset", String(options.offset));
  }
  if (options.sort) {
    const sortEntry = Object.entries(options.sort)?.[0];
    if (sortEntry) {
      const [field, direction] = sortEntry;
      params.set("sort", `${field}:${direction}`);
    }
  }
  if (options.match) {
    for (const [k, v] of Object.entries(options.match)) {
      params.set(k, String(v));
    }
  }
  if (options.notMatch) {
    for (const [k, v] of Object.entries(options.notMatch)) {
      params.set(`${k}!`, String(v));
    }
  }
  if (options.include) {
    for (const [k, v] of Object.entries(options.include)) {
      params.set(k, Array.isArray(v) ? v.join(",") : String(v));
    }
  }
  if (options.exclude) {
    for (const [k, v] of Object.entries(options.exclude)) {
      params.set(`${k}!`, Array.isArray(v) ? v.join(",") : String(v));
    }
  }
  if (options.regex) {
    for (const [k, v] of Object.entries(options.regex)) {
      params.set(k, String(v));
    }
  }
  if (options.notRegex) {
    for (const [k, v] of Object.entries(options.notRegex)) {
      params.set(`${k}!`, String(v));
    }
  }

  let queryParams = params.toString();

  // weird exceptions...
  if (options.exists?.length) {
    queryParams += `${queryParams ? "&" : ""}${options.exists.join("&")}`;
  }
  if (options.notExist?.length) {
    queryParams += `${queryParams ? "&" : ""}!${options.notExist.join("&")}`;
  }
  if (options.lt) {
    for (const [k, v] of Object.entries(options.lt)) {
      queryParams += `${queryParams ? "&" : ""}${k}<${v}`;
    }
  }
  if (options.gt) {
    for (const [k, v] of Object.entries(options.gt)) {
      queryParams += `${queryParams ? "&" : ""}${k}>${v}`;
    }
  }
  if (options.gte) {
    for (const [k, v] of Object.entries(options.gte)) {
      queryParams += `${queryParams ? "&" : ""}${k}>=${v}`;
    }
  }

  return `?${queryParams}`;
};
