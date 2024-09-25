import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file
import { getAll, deleteById, post, put } from './memdb'; // Import functions from memdb.js

const App = () => {
  const [customers, setCustomers] = useState([]); // Inicialitzar customers amb un array buit
  const [title, setTitle] = useState("Add"); // Títol inicial
  const blankCustomer = { id: -1, name: '', email: '', password: '' };
  const [selectedCustomer, setSelectedCustomer] = useState(blankCustomer);
  const [formData, setFormData] = useState(blankCustomer);

  // Funció per recuperar els clients
  const getCustomers = function() {
    console.log("in getCustomers()"); // Missatge de registre per a depuració
    const initialCustomers = getAll(); // Obtenir tots els clients
    setCustomers(initialCustomers); // Establir l'estat dels clients
  };

  // Recuperar clients quan el component es munta
  useEffect(() => {
    getCustomers(); // Cridar a getCustomers per omplir la llista de clients
  }, []); // Array de dependències buit significa que això s'executa només un cop en muntar

  const onDeleteClick = () => {
    console.log('onDeleteClick()');

    // Check if a customer is selected
    if (selectedCustomer.id === -1) {
      console.log('No customer selected for deletion.');
      return; // Exit the function if no customer is selected
    }

    deleteById(selectedCustomer.id); // Esborrar el client seleccionat
    setCustomers(getAll()); // Actualitzar la llista de clients
    setSelectedCustomer(blankCustomer);
    setFormData(blankCustomer);
    setTitle("Add"); // Restablir el títol a "Add"
  };

  const onSaveClick = () => {
    console.log('onSaveClick()', formData);
    if (selectedCustomer.id === -1) {
      post(formData); // Afegir un nou client
    } else {
      put(selectedCustomer.id, formData); // Actualitzar el client existent
    }
    setCustomers(getAll()); // Actualitzar la llista de clients
    setTitle("Add"); // Restablir el títol a "Add" després de guardar
  };

  const onCancelClick = () => {
    console.log('onCancelClick()');
    setSelectedCustomer(blankCustomer);
    setFormData(blankCustomer);
    setTitle("Add"); // Restablir el títol a "Add" quan s'cancela
  };

  const handleListClick = (customer) => {
    setSelectedCustomer(customer);
    setFormData({
      name: customer.name,
      email: customer.email,
      password: customer.password,
    });
    setTitle("Update"); // Canviar el títol a "Update" quan es selecciona un client
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

      <h2>{title} Customer</h2> {/* Mostrar el títol dinàmicament */}
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
