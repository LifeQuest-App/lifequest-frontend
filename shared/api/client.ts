const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:5000/api";

type RequestConfig = RequestInit & {
    body?: unknown;
};

export const apiClient = async <T>(
    path: string,
    config: RequestConfig = {},
): Promise<T> => {
    const { body, headers, ...restConfig } = config;

    const response = await fetch(`${API_BASE_URL}${path}`, {
        ...restConfig,
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
    }

    return response.json() as Promise<T>;
};
