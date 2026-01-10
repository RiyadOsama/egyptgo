import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SignupPage from "./page";
import { vi } from "vitest";

vi.mock("@/hooks/use-auth", () => ({
  useRegister: () => ({
    mutate: vi.fn(),
    isPending: false,
  }),
}));

describe("Signup Page", () => {
  test("renders signup form", () => {
    render(<SignupPage />);
    expect(screen.getByRole("heading", { name: /signup/i })).toBeInTheDocument();
  });

  test("shows error when passwords do not match", () => {
    render(<SignupPage />);

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "Mohamed" },
    });

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "test@test.com" },
    });

    fireEvent.change(screen.getByLabelText(/^password$/i), {
      target: { value: "12345678" },
    });

    fireEvent.change(screen.getByLabelText(/confirmation/i), {
      target: { value: "wrongpass" },
    });

    const submitButton = screen.getByRole("button", { name: /signup/i });
    
    // Button should be disabled when passwords don't match
    expect(submitButton).toBeDisabled();
  });
});
