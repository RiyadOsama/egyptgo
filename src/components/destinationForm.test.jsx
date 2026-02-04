import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DestinationForm from './destination-form';
import { vi } from 'vitest';

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
}));

vi.mock('@/hooks/use-destinations', () => ({
  useCreateDestination: () => ({ mutate: vi.fn(), isLoading: false }),
  useUpdateDestination: () => ({ mutate: vi.fn(), isLoading: false }),
  useGetDestinationById: () => ({ data: null }),
}));

describe('DestinationForm', () => {
  test('renders destination form', () => {
    render(<DestinationForm />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
  });

  test('submit button disabled when form is invalid', () => {
    render(<DestinationForm />);

    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toBeDisabled();
  });

  test('submit button enabled when form is valid', () => {
    render(<DestinationForm />);

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'Paris' },
    });

    fireEvent.change(screen.getByLabelText(/description/i), {
      target: { value: 'Beautiful city' },
    });

    const fileInput = screen.getByLabelText(/image/i);
    fireEvent.change(fileInput, {
      target: {
        files: [new File(['test'], 'image.png', { type: 'image/png' })],
      },
    });

    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).not.toBeDisabled();
  });
});
