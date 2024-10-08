const baseURL = 'http://localhost:4000/customers'; // Replace with your actual API URL

// Fetch all customers
export async function getAll(setCustomers) {
  const myInit = {
    method: 'GET',
    mode: 'cors',
  };
  
  try {
    const response = await fetch(baseURL, myInit);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }
    const data = await response.json();
    
    setCustomers(data); // Update state with fetched customers
  } catch (error) {
    alert(error);
  }
}

export function deleteById(id, postOpCallback) {
  const header = {
    method: "DELETE",
    mode: "cors",
  };

  const deleteDataById = async (url) => {
    try {
      const response = await fetch(url, header);
      if (!response.ok) {
        throw new Error(`Error deleting data: ${response.status}`);
      }
      postOpCallback();
    } catch (error) {
      alert(error);
    }
  };
  const deleteURL = baseURL + `/${id}`;
  deleteDataById(deleteURL);
}

export function post(item, postOpCallback) {
  const header = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: item.name,
      email: item.email,
      password: item.password,
    }),
  };

  const postData = async (url) => {
    try {
      const response = await fetch(url, header);
      if (!response.ok) {
        throw new Error(`Error posting data: ${response.status}`);
      }

      postOpCallback();
    } catch (error) {
      alert(error);
    }
  };

  postData(baseURL);
}

export function put(id, item, postOpCallback) {
  const header = {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: item.name,
      email: item.email,
      password: item.password,
    }),
  };

  const postData = async (url) => {
    try {
      const response = await fetch(url, header);
      if (!response.ok) {
        throw new Error(`Error posting data: ${response.status}`);
      }

      postOpCallback();
    } catch (error) {
      alert(error);
    }
  };
  const putURL = baseURL + `/${id}`;
  postData(putURL);
}