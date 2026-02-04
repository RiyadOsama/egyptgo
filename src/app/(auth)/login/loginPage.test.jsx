import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from './page';
import { vi } from 'vitest';

vi.mock('@/hooks/use-auth', () => ({
  useLogin: () => ({
    mutate: vi.fn(),
    isPending: false,
  }),
}));

describe('Login Page', () => {
  test('renders login form', () => {
    render(<LoginPage />);
    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
  });

  test('shows validation errors when submitting empty form', () => {
    render(<LoginPage />);

    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/password is required/i)).toBeInTheDocument();
  });

  test('does not show validation errors when form is filled', () => {
    render(<LoginPage />);

    fireEvent.change(screen.getByPlaceholderText(/email/i), {
      target: { value: 'test@test.com' },
    });

    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: '12345678' },
    });

    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(screen.queryByText(/email is required/i)).toBeNull();
  });
});
