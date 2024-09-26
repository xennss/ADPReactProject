import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file
import { getAll, deleteById, post, put } from './memdb'; // Import functions from memdb.js
import CustomerList from './customerList'; // Import CustomerList component
import CustomerAddUpdateForm from './customerAddUpdateForm'; // Import CustomerAddUpdateForm component

const App = () => {
  const [customers, setCustomers] = useState([]); // Initialize customers with an empty array
  const [filteredCustomers, setFilteredCustomers] = useState([]); // Initialize filtered customers
  const [mode, setMode] = useState("Add"); // Initialize mode as "Add"
  const blankCustomer = { id: -1, name: '', email: '', password: '' };
  const [selectedCustomer, setSelectedCustomer] = useState(blankCustomer);
  const [formData, setFormData] = useState(blankCustomer);

  // Function to retrieve customers
  const getCustomers = async () => {
    console.log("in getCustomers()"); // Log message for debugging
    const initialCustomers = await getAll(); // Fetch all customers
    setCustomers(initialCustomers); // Set the customers state
    setFilteredCustomers(initialCustomers); // Set filtered customers to all initially
  };

  // Fetch customers when the component mounts
  useEffect(() => {
    getCustomers(); // Call getCustomers to populate customer list
  }, []); // Empty dependency array means this runs once on mount

  const onDeleteClick = () => {
    console.log('onDeleteClick()');
    if (selectedCustomer.id === -1) {
      console.log('No customer selected for deletion.');
      return; // Exit the function if no customer is selected
    }

    deleteById(selectedCustomer.id); // Delete the selected customer
    getCustomers(); // Refresh the customer list
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
    setFormData(blankCustomer); // Clear the form
    setSelectedCustomer(blankCustomer); // Deselect any selected customer
    getCustomers(); // Refresh the customer list
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
      setSelectedCustomer(blankCustomer);
      setFormData(blankCustomer);
      setMode("Add");
    } else {
      setSelectedCustomer(customer);
      setFormData({
        name: customer.name,
        email: customer.email,
        password: customer.password,
      });
      setMode("Update");
    }
  };

  const handleInputChange = (event) => {
    console.log("in handleInputChange()"); // Log for debugging
    const name = event.target.name; // Get the name of the input field
    const value = event.target.value; // Get the value from the input field

    let newFormObject = { ...formData }; // Clone current form data
    newFormObject[name] = value; // Update the property that changed

    setFormData(newFormObject); // Update the state with new form data
  };

  const handleSearch = (searchTerm) => {
    const filtered = customers.filter(customer =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCustomers(filtered); // Update filtered customers
  };

  const handleCancelSearch = () => {
    setFilteredCustomers(customers); // Reset filtered customers to all customers
  };

  return (
    <div className="App">
      <h1>React App</h1>
      <CustomerList
        customers={filteredCustomers} // Use filtered customers
        handleListClick={handleListClick}
        selectedCustomer={selectedCustomer} // Pass selectedCustomer to CustomerList
        onSearch={handleSearch} // Pass search handler
        onCancelSearch={handleCancelSearch} // Pass cancel search handler
      />
      <CustomerAddUpdateForm
        mode={mode}
        formData={formData}
        onSaveClick={onSaveClick}
        onCancelClick={onCancelClick}
        onDeleteClick={onDeleteClick}
        handleInputChange={handleInputChange}
      />
    </div>
  );
};

export default App;
