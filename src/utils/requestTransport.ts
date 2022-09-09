enum METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

type Options = {
  method: METHODS;
  data?: any;
};

function queryStringify(data: any) {
  if (typeof data !== "object") {
    throw new Error("Data must be object");
  }
  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => {
    return `${result}${key}=${data[key]}${index < keys.length - 1 ? "&" : ""}`;
  }, "?");
}

class HTTPTransport {
  get = (url: string, options = {}) => {
    return this.request(url, { ...options, method: METHODS.GET });
  };

  post = (url: string, options = {}) => {
    return this.request(url, { ...options, method: METHODS.POST });
  };

  put = (url: string, options = {}) => {
    return this.request(url, { ...options, method: METHODS.PUT });
  };

  delete = (url: string, options = {}) => {
    return this.request(url, { ...options, method: METHODS.DELETE });
  };

  request(
    url: string,
    options: Options = { method: METHODS.GET }
  ): Promise<XMLHttpRequest> {
    const { method, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(
        method,
        method === "GET" && !!data ? `${url}${queryStringify(data)}` : url
      );

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  }
}
