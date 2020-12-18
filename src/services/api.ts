const baseUrl = 'https://brainstorm-interview-task.herokuapp.com';

export const Api = {
  get: <T = unknown>(url: string): Promise<T> => (
    fetch(`${baseUrl}${url}`)
      .then((res) => {
        if (!res.ok) { throw res; }
        return res.json();
      })
  ),

  delete: <T = unknown>(url: string): Promise<T> => (
    fetch(`${baseUrl}${url}`, { method: 'DELETE' })
      .then((res) => {
        if (!res.ok) { throw res; }
        return res.json();
      })
  ),

  post: <T = unknown>(url: string, data: any): Promise<T> => (
    fetch(`${baseUrl}${url}`, {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => {
        if (!res.ok) { throw res; }
        return res.json();
      })
  ),

  put: <T = unknown>(url: string, data: any): Promise<T> => (
    fetch(`${baseUrl}${url}`, {
      method: 'PUT',
      body: data,
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => {
        if (!res.ok) { throw res; }
        return res.json();
      })
  ),

  upload: <T = unknown>(url: string, data: any): Promise<T> => (
    fetch(`${baseUrl}${url}`, { method: 'POST', body: data })
      .then((res) => {
        if (!res.ok) { throw res; }
        return res.json();
      })
  )
};
