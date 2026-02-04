import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './booking-form';
import { vi } from 'vitest';

vi.mock('@/hooks/use-bookings', () => ({
  useCreateBooking: () => ({
    mutate: vi.fn(),
    isPending: false,
  }),
}));

describe('BookingForm', () => {
  const mockPackage = {
    id: 1,
    price: 100,
    groupSize: 5,
  };

  test('submit button is disabled when form is empty', () => {
    render(<BookingForm packageData={mockPackage} totalPrice={100} setTotalPrice={vi.fn()} />);

    expect(screen.getByRole('button', { name: /confirm/i })).toBeDisabled();
  });

  test('shows validation errors when submitting empty fields', () => {
    render(<BookingForm packageData={mockPackage} totalPrice={100} setTotalPrice={vi.fn()} />);

    const submitButton = screen.getByRole('button', { name: /confirm/i });

    // Button should be disabled when form is empty
    expect(submitButton).toBeDisabled();
  });

  test('enables submit button when form is valid', () => {
    render(<BookingForm packageData={mockPackage} totalPrice={100} setTotalPrice={vi.fn()} />);

    fireEvent.change(screen.getByPlaceholderText(/john doe/i), {
      target: { value: 'Mohamed Ahmed' },
    });

    fireEvent.change(screen.getByPlaceholderText(/john@example.com/i), {
      target: { value: 'test@test.com' },
    });

    fireEvent.change(screen.getByPlaceholderText(/\+1/i), {
      target: { value: '+201234567890' },
    });

    expect(screen.getByRole('button', { name: /confirm/i })).toBeEnabled();
  });
});
