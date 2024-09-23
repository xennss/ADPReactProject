import React from 'react';

const App = () => {
  // Static array of customers
  const customers = [
    { id: 1, name: 'Alice', email: 'alice@example.com', password: 'password123' },
    { id: 2, name: 'Bob', email: 'bob@example.com', password: 'password456' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', password: 'password789' },
  ];

  // Function stubs for button actions
  const onDeleteClick = () => {
    console.log('onDeleteClick()');
  };

  const onSaveClick = () => {
    console.log('onSaveClick()');
  };

  const onCancelClick = () => {
    console.log('onCancelClick()');
  };

  // Handle click on a customer in the list
  const handleListClick = (customer) => {
    console.log('handleListClick()', customer);
  };

  return (
    <div>
      <h1>React App</h1>
      <h2>Add Customer</h2>
      <form>
        <label>
          Name:
          <input type="text" disabled />
        </label>
        <br />
        <label>
          Email:
          <input type="email" disabled />
        </label>
        <br />
        <label>
          Password:
          <input type="password" disabled />
        </label>
        <br />
        <button type="button" onClick={onSaveClick}>Save</button>
        <button type="button" onClick={onCancelClick}>Cancel</button>
        <button type="button" onClick={onDeleteClick}>Delete</button>
      </form>
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
              <tr key={customer.id} onClick={() => handleListClick(customer)}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
