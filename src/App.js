import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file
import { getAll, deleteById, post, put } from './restdb'; // Import functions from memdb.js
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
  const getCustomers = () => {
    getAll(setCustomers); // Fetch all customers
  };
  

  // Fetch customers when the component mounts
  useEffect(() => {
    getCustomers(); // Call getCustomers to populate customer list

  }, [selectedCustomer]); // Empty dependency array means this runs once on mount

  const onDeleteClick = () => {
    console.log('onDeleteClick()');
    if (selectedCustomer.id === -1) {
      console.log('No customer selected for deletion.');
      return; // Exit the function if no customer is selected
    }
  
    // Primero, guarda el ID del cliente que vas a eliminar
    const idToDelete = selectedCustomer.id;
  
    deleteById(idToDelete, () => {
      // Actualiza el estado después de eliminar el cliente
      setCustomers(prevCustomers => prevCustomers.filter(customer => customer.id !== idToDelete));
      setFilteredCustomers(prevFiltered => prevFiltered.filter(customer => customer.id !== idToDelete));
      setSelectedCustomer(blankCustomer);
      setFormData(blankCustomer);
      setMode("Add"); // Reset the mode to "Add"
    });
  };
  

  const onSaveClick = () => {
    console.log('in onSaveClick()', formData);
    
    let postOpCallback = () => {
      if (mode === "Add") {
        // Añadir nuevo cliente
        const newCustomer = { ...formData, id: Date.now() }; // Usa un ID temporal
        setCustomers(prevCustomers => [...prevCustomers, newCustomer]);
        setFilteredCustomers(prevFiltered => [...prevFiltered, newCustomer]);
      } else if (mode === "Update") {
        // Actualizar cliente existente
        setCustomers(prevCustomers => 
          prevCustomers.map(customer => 
            customer.id === selectedCustomer.id ? { ...formData, id: selectedCustomer.id } : customer
          )
        );
        setFilteredCustomers(prevFiltered => 
          prevFiltered.map(customer => 
            customer.id === selectedCustomer.id ? { ...formData, id: selectedCustomer.id } : customer
          )
        );
      }
      
      setSelectedCustomer(blankCustomer);
      setFormData(blankCustomer);
      setMode("Add"); // Reset the mode to "Add" after saving
    };
  
    if (mode === "Add") {
      post(formData, postOpCallback); // Añadir nuevo cliente
    } else if (mode === "Update") {
      put(selectedCustomer.id, formData, postOpCallback); // Actualizar cliente existente
    }
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
    <div className="container">
  <div className="customer-list">
    <CustomerList
      customers={filteredCustomers}
      handleListClick={handleListClick}
      selectedCustomer={selectedCustomer}
      onSearch={handleSearch}
      onCancelSearch={handleCancelSearch}
    />
  </div>
  <div className="customer-form">
    <CustomerAddUpdateForm
      mode={mode}
      formData={formData}
      onSaveClick={onSaveClick}
      onCancelClick={onCancelClick}
      onDeleteClick={onDeleteClick}
      handleInputChange={handleInputChange}
    />
  </div>
</div>
  );
};

export default App;