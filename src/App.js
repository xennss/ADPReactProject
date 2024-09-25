import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const App = () => {
  // Static array of customers, including a blank customer for internal use
  const blankCustomer = { id: -1, name: '', email: '', password: '' }; // Internal use only
  const customers = [
    { id: 1, name: 'Alice', email: 'alice@example.com', password: 'password123' },
    { id: 2, name: 'Bob', email: 'bob@example.com', password: 'password456' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', password: 'password789' },
  ];

  // State to track the selected customer and form data
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [formData, setFormData] = useState({
    name: '', // Default name
    email: '',
    password: '',
  });

  // Function stubs for button actions
  const onDeleteClick = () => {
    console.log('onDeleteClick()');
    setSelectedCustomer(null); // Clear selection after delete
    setFormData(blankCustomer); // Reset to blank customer values
  };

  const onSaveClick = () => {
    console.log('onSaveClick()', formData);
    // Implement save logic here
  };

  const onCancelClick = () => {
    console.log('onCancelClick()');
    setSelectedCustomer(null); // Clear selection on cancel
    setFormData(blankCustomer); // Reset to blank customer values
  };

  // Handle click on a customer in the list
  const handleListClick = (customer) => {
    if (selectedCustomer && selectedCustomer.id === customer.id) {
      // If the same customer is clicked again, deselect it
      setSelectedCustomer(null);
      setFormData(blankCustomer); // Reset to blank customer values
    } else {
      // Select the clicked customer
      setSelectedCustomer(customer);
      // Update the form data with the selected customer's details
      setFormData({
        name: customer.name,
        email: customer.email,
        password: customer.password,
      });
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="App">
      <h1>React App</h1>

      <h2>Customers List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr
              key={customer.id}
              onClick={() => handleListClick(customer)}
              style={{
                fontWeight: selectedCustomer && selectedCustomer.id === customer.id ? 'bold' : 'normal',
                cursor: 'pointer', // Change cursor to pointer for better UX
              }}
            >
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.password}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Add Customer</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <button type="button" onClick={onSaveClick}>Save</button>
              <button type="button" onClick={onCancelClick}>Cancel</button>
              <button type="button" onClick={onDeleteClick}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
