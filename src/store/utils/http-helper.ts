export abstract class HttpHelper {
  /**
   * Метод выполняет запрос и преобразует ответ в JSON
   */
  public static fetchAsJson<Response>(input: RequestInfo, init?: RequestInit): Promise<Response> {
    return fetch(input, init)
    .then((response) => {
      return response.text()
    })
    .then<Response>((responseText) => {
      return JSON.parse(responseText)
    })
  }
}
