import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file
import { getAll, deleteById, post, put } from './memdb'; // Import functions from memdb.js

const App = () => {
  const [customers, setCustomers] = useState([]); // Initialize customers with an empty array
  const blankCustomer = { id: -1, name: '', email: '', password: '' };
  const [selectedCustomer, setSelectedCustomer] = useState(blankCustomer);
  const [formData, setFormData] = useState(blankCustomer);

  // Function to retrieve customers
  const getCustomers = function() {
    console.log("in getCustomers()"); // Log message for debugging
    const initialCustomers = getAll(); // Fetch all customers
    setCustomers(initialCustomers); // Set the customers state with the retrieved customers
  };

  // Fetch customers when the component mounts
  useEffect(() => {
    getCustomers(); // Call getCustomers to populate customer list
  }, []); // Empty dependency array means this runs once on mount

  const onDeleteClick = () => {
    console.log('onDeleteClick()');
    deleteById(selectedCustomer.id); // Delete the selected customer
    setCustomers(getAll()); // Refresh the customer list
    setSelectedCustomer(blankCustomer);
    setFormData(blankCustomer);
  };

  const onSaveClick = () => {
    console.log('onSaveClick()', formData);
    if (selectedCustomer.id === -1) {
      post(formData); // Add a new customer
    } else {
      put(selectedCustomer.id, formData); // Update existing customer
    }
    setCustomers(getAll()); // Refresh the customer list
  };

  const onCancelClick = () => {
    console.log('onCancelClick()');
    setSelectedCustomer(blankCustomer);
    setFormData(blankCustomer);
  };

  const handleListClick = (customer) => {
    setSelectedCustomer(customer);
    setFormData({
      name: customer.name,
      email: customer.email,
      password: customer.password,
    });
  };

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
                fontWeight: selectedCustomer.id === customer.id ? 'bold' : 'normal',
                cursor: 'pointer',
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
