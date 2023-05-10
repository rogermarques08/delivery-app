const getData = async (method, body, endpoint) => {
  const response = await fetch(`http://localhost:3001${endpoint}`, {
    method: `${method}`, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors',
    credentials: 'same-origin',
    referrerPolicy: 'no-referrer',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body), // body data type must match "Content-Type" header
  });

  const data = await response.json();

  return data;
};

export async function getProducts(method, endpoint, token = 'no-token') {
  const response = await fetch(`http://localhost:3001${endpoint}`, {
    method: `${method}`, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors',
    credentials: 'same-origin',
    referrerPolicy: 'no-referrer',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });

  const data = await response.json();

  return data;
}

export default getData;
