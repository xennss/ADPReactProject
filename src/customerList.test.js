// CustomerList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CustomerList from './customerList';

describe('CustomerList', () => {
  const mockHandleListClick = jest.fn();
  
  const customers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', password: 'password123' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', password: 'password456' },
  ];

  test('calls handleListClick when a customer is selected', () => {
    render(
      <CustomerList
        customers={customers}
        handleListClick={mockHandleListClick}
        selectedCustomer={{ id: 1 }} // Simula que el cliente 1 está seleccionado
        onSearch={() => {}}
        onCancelSearch={() => {}}
      />
    );

    // Busca el nombre del cliente que deseas seleccionar
    const customerRow = screen.getByText('John Doe');
    
    // Simula un clic en la fila del cliente
    fireEvent.click(customerRow);

    // Verifica que handleListClick fue llamado con el cliente correcto
    expect(mockHandleListClick).toHaveBeenCalledWith(customers[0]);
  });

  test('highlights the selected customer', () => {
    render(
      <CustomerList
        customers={customers}
        handleListClick={mockHandleListClick}
        selectedCustomer={{ id: 1 }} // Simula que el cliente 1 está seleccionado
        onSearch={() => {}}
        onCancelSearch={() => {}}
      />
    );

    // Verifica que la fila del cliente seleccionado está en negrita
    const customerRow = screen.getByRole('row', { name: /John Doe/i });

    expect(customerRow).toHaveStyle('font-weight: bold');
    
    // Verifica que la fila del otro cliente no está en negrita
    const anotherCustomerRow = screen.getByText('Jane Smith');
    expect(anotherCustomerRow).not.toHaveStyle('font-weight: bold');
  });

  test('selects and deselects a customer on click', () => {
    const { rerender } = render(
      <CustomerList
        customers={customers}
        handleListClick={mockHandleListClick}
        selectedCustomer={{}} // Ningún cliente seleccionado inicialmente
        onSearch={() => {}}
        onCancelSearch={() => {}}
      />
    );

    // Simula clic en "John Doe"
    fireEvent.click(screen.getByText('John Doe'));
    expect(mockHandleListClick).toHaveBeenCalledWith(customers[0]);

    // Rerender con "John Doe" seleccionado
    rerender(
      <CustomerList
        customers={customers}
        handleListClick={mockHandleListClick}
        selectedCustomer={customers[0]} // John Doe seleccionado
        onSearch={() => {}}
        onCancelSearch={() => {}}
      />
    );

    // Simula clic en "John Doe" nuevamente para deseleccionarlo
    fireEvent.click(screen.getByText('John Doe'));
    expect(mockHandleListClick).toHaveBeenCalledTimes(2); // Debe ser llamado de nuevo
  });
  
  
});
