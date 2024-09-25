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

// Add a new customer
export async function post(item, resetForm) {
  const myInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  };
  
  try {
    const response = await fetch(baseURL, myInit);
    if (!response.ok) {
      throw new Error(`Error adding customer: ${response.status}`);
    }
    await response.json(); // Wait for the response
    resetForm(); // Call the function to reset the form after adding
  } catch (error) {
    alert(error);
  }
}

// Update an existing customer
export async function put(id, item, resetForm) {
  const myInit = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  };
  
  try {
    const response = await fetch(`${baseURL}/${id}`, myInit);
    if (!response.ok) {
      throw new Error(`Error updating customer: ${response.status}`);
    }
    await response.json(); // Wait for the response
    resetForm(); // Call the function to reset the form after updating
  } catch (error) {
    alert(error);
  }
}

// Delete a customer by ID
export async function deleteById(id, resetForm) {
  const myInit = {
    method: 'DELETE',
  };
  
  try {
    const response = await fetch(`${baseURL}/${id}`, myInit);
    if (!response.ok) {
      throw new Error(`Error deleting customer: ${response.status}`);
    }
    resetForm(); // Call the function to reset the form after deleting
  } catch (error) {
    alert(error);
  }
}
