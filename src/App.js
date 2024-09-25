import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file
import { getAll, deleteById, post, put } from './memdb'; // Import functions from memdb.js

const App = () => {
  const [customers, setCustomers] = useState([]); // Initialize customers with an empty array
  const [mode, setMode] = useState("Add"); // Initialize mode as "Add"
  const blankCustomer = { id: -1, name: '', email: '', password: '' };
  const [selectedCustomer, setSelectedCustomer] = useState(blankCustomer);
  const [formData, setFormData] = useState(blankCustomer);

  // Function to retrieve customers
  const getCustomers = () => {
    console.log("in getCustomers()"); // Log message for debugging
    const initialCustomers = getAll(); // Fetch all customers
    setCustomers(initialCustomers); // Set the customers state
  };

  // Fetch customers when the component mounts
  useEffect(() => {
    getCustomers(); // Call getCustomers to populate customer list
  }, []); // Empty dependency array means this runs once on mount

  const onDeleteClick = () => {
    console.log('onDeleteClick()');

    // Check if a customer is selected
    if (selectedCustomer.id === -1) {
      console.log('No customer selected for deletion.');
      return; // Exit the function if no customer is selected
    }

    // Proceed with deletion
    deleteById(selectedCustomer.id); // Delete the selected customer
    setCustomers(getAll()); // Refresh the customer list
    setSelectedCustomer(blankCustomer);
    setFormData(blankCustomer);
    setMode("Add"); // Reset the mode to "Add"
  };

  const onSaveClick = () => {
    console.log('in onSaveClick()', formData);

    if (mode === "Add") {
        post(formData); // Add a new customer
    } else if (mode === "Update") {
        put(selectedCustomer.id, formData); // Update the existing customer
    }

    // Clear the form and reset to the blank customer
    setFormData(blankCustomer); // Reset the form data
    setSelectedCustomer(blankCustomer); // Deselect any selected customer
    setCustomers(getAll()); // Refresh the customer list
    setMode("Add"); // Optionally reset the mode to "Add" after saving
};

  

  const onCancelClick = () => {
    console.log('onCancelClick()');
    setSelectedCustomer(blankCustomer);
    setFormData(blankCustomer);
    setMode("Add"); // Reset the mode to "Add" when canceled
  };

  const handleListClick = (customer) => {
    if (selectedCustomer.id === customer.id) {
      // Deselect if the same customer is clicked again
      setSelectedCustomer(blankCustomer);
      setFormData(blankCustomer);
      setMode("Add"); // Reset the mode to "Add"
    } else {
      // Select the clicked customer
      setSelectedCustomer(customer);
      setFormData({
        name: customer.name,
        email: customer.email,
        password: customer.password,
      });
      setMode("Update"); // Change the mode to "Update" when selecting a customer
    }
  };

  const handleInputChange = (event) => {
    console.log("in handleInputChange()"); // Log for debugging
    const name = event.target.name; // Get the name of the input field
    const value = event.target.value; // Get the value from the input field

    // Clone the current form data and update the specific field
    let newFormObject = { ...formData }; // Assuming formData is your state variable
    newFormObject[name] = value; // Update the property that changed

    setFormData(newFormObject); // Update the state with the new form data
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

      <h2>{mode} Customer</h2> {/* Use the mode in the form title */}
      <table>
        <tbody>
          <tr>
            <td>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  onChange={handleInputChange} // Call the handler on change
                  value={formData.name} // Bind the input value to formData
                  placeholder="Customer Name"
                  required
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
                  onChange={handleInputChange} // Call the handler on change
                  value={formData.email} // Bind the input value to formData
                  placeholder="Customer Email"
                  required
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
                  onChange={handleInputChange} // Call the handler on change
                  value={formData.password} // Bind the input value to formData
                  placeholder="Customer Password"
                  required
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
