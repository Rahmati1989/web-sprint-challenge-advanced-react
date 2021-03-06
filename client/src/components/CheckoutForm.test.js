import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CheckoutForm from './CheckoutForm';

// Write up the two tests here and make sure they are testing what the title shows

test('form header renders', () => {

  render(<CheckoutForm />);
  const header = screen.getByText(/checkout form/i);

  expect(header).toBeInTheDocument();
});

test('form shows success message on submit with form details', () => {

  render(<CheckoutForm />);


  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);

  fireEvent.change(firstNameInput, { target: { value: 'Rafiullah' } });
  fireEvent.change(lastNameInput, { target: { value: 'Rahmati' } });
  fireEvent.change(addressInput, { target: { value: '9440 W Stockton Blvd' } });
  fireEvent.change(cityInput, { target: { value: 'Elk Grove' } });
  fireEvent.change(stateInput, { target: { value: 'California' } });
  fireEvent.change(zipInput, { target: { value: '95758' } });


  const checkoutButton = screen.getByRole('button', /checkout/i);

  fireEvent.click(checkoutButton);


  const successMessage = screen.getByTestId('successMessage');

  expect(successMessage).toBeInTheDocument();

});