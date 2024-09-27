// CustomerAddUpdateForm.test.js
import React from 'react';
import App from './App'; 
import { render, screen, fireEvent } from '@testing-library/react';
import CustomerAddUpdateForm from './customerAddUpdateForm';

describe('CustomerAddUpdateForm', () => {
  const mockOnSaveClick = jest.fn();
  const mockOnCancelClick = jest.fn();
  const mockOnDeleteClick = jest.fn();
  const mockHandleInputChange = jest.fn();
  
  const initialFormData = {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123'
  };

  test('maintains form data in inputs', () => {
    render(
      <CustomerAddUpdateForm
        mode="Add"
        formData={initialFormData}
        onSaveClick={mockOnSaveClick}
        onCancelClick={mockOnCancelClick}
        onDeleteClick={mockOnDeleteClick}
        handleInputChange={mockHandleInputChange}
      />
    );

    // Check that the input fields have the correct initial values
    expect(screen.getByPlaceholderText('Customer Name')).toHaveValue(initialFormData.name);
    expect(screen.getByPlaceholderText('Customer Email')).toHaveValue(initialFormData.email);
    expect(screen.getByPlaceholderText('Customer Password')).toHaveValue(initialFormData.password);
  });

  test('calls handleInputChange on input change', () => {
    render(
      <CustomerAddUpdateForm
        mode="Add"
        formData={initialFormData}
        onSaveClick={mockOnSaveClick}
        onCancelClick={mockOnCancelClick}
        onDeleteClick={mockOnDeleteClick}
        handleInputChange={mockHandleInputChange}
      />
    );

    // Simulate input changes
    fireEvent.change(screen.getByPlaceholderText('Customer Name'), { target: { value: 'Jane Doe' } });
    expect(mockHandleInputChange).toHaveBeenCalledTimes(1); // Ensure the handler was called
  });

  // Nuevo test para verificar la existencia de los botones
  test('renders Cancel, Save, and Delete buttons', () => {
    render(
      <CustomerAddUpdateForm
        mode="Add"
        formData={initialFormData}
        onSaveClick={mockOnSaveClick}
        onCancelClick={mockOnCancelClick}
        onDeleteClick={mockOnDeleteClick}
        handleInputChange={mockHandleInputChange}
      />
    );

    // Verifica que los botones se rendericen en pantalla
    expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument();
  });


  // Nuevo test para verificar la funcionalidad de eliminar un usuario
  test('calls onDeleteClick when Delete button is pressed', () => {
    render(
      <CustomerAddUpdateForm
        mode="Edit" // Suponiendo que el modo es 'Edit' para un usuario existente
        formData={initialFormData}
        onSaveClick={mockOnSaveClick}
        onCancelClick={mockOnCancelClick}
        onDeleteClick={mockOnDeleteClick} // Pasar el mock para el botón de eliminar
        handleInputChange={mockHandleInputChange}
      />
    );

    // Simula el clic en el botón "Eliminar"
    fireEvent.click(screen.getByRole('button', { name: /delete/i }));

    // Verifica que se haya llamado a la función onDeleteClick
    expect(mockOnDeleteClick).toHaveBeenCalledTimes(1);
  });

  

  
});
