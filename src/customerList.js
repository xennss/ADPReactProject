import React, { useState } from 'react';

const CustomerList = ({ customers, handleListClick, selectedCustomer, onSearch, onCancelSearch }) => {
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda

  const handleSearch = () => {
    onSearch(searchTerm); // Llama a la función onSearch pasada como prop
  };

  const handleCancelSearch = () => {
    setSearchTerm(''); // Limpiar el término de búsqueda
    onCancelSearch(); // Llama a la función onCancelSearch pasada como prop
  };

  return (
    <div>
      <h2>Customers List</h2>
      <div className="customer-list-container"> {/* New div for scrolling */}
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
      <div>
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
        <button onClick={handleCancelSearch}>Cancelar</button>
      </div>
    </div>
  );
};

export default CustomerList;
