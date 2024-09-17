interface API {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: BodyInit;
  headers?: {};
}

export const Fetch = async ({ url, method, body, headers }: API) => {
  const response = await fetch(url, {
    method: method,
    body: body,
    headers,
  });

  return await response.json();
};
