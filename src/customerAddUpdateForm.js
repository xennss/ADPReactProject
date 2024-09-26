// CustomerAddUpdateForm.js
import React from 'react';

const CustomerAddUpdateForm = ({ mode, formData, onSaveClick, onCancelClick, onDeleteClick, handleInputChange }) => {
  return (
    <div>
      <h2>{mode} Customer</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  onChange={handleInputChange}
                  value={formData.name}
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
                  onChange={handleInputChange}
                  value={formData.email}
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
                  onChange={handleInputChange}
                  value={formData.password}
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

export default CustomerAddUpdateForm;