// CustomerList.js
import React from 'react';

const CustomerList = ({ customers, handleListClick, selectedCustomer }) => {
  return (
    <div>
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
                fontWeight: selectedCustomer.id === customer.id ? 'bold' : 'normal', // Highlight selected user
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
    </div>
  );
};

export default CustomerList;
