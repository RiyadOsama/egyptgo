import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PackageForm from "./package-form";
import { vi } from "vitest";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn() }),
}));

vi.mock("@/hooks/use-packages", () => ({
  useCreatePackage: () => ({ mutate: vi.fn(), isLoading: false }),
  useUpdatePackage: () => ({ mutate: vi.fn(), isLoading: false }),
  useGetPackageById: () => ({ data: null }),
}));

vi.mock("@/hooks/use-destinations", () => ({
  useGetAllDestinations: () => ({ data: [] }),
}));

describe("PackageForm", () => {
  test("renders package form", () => {
    render(<PackageForm />);

    expect(screen.getByText(/package name/i)).toBeInTheDocument();
    expect(screen.getByText(/price/i)).toBeInTheDocument();
  });

  test("submit disabled when form is empty", () => {
    render(<PackageForm />);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("submit enabled when form is valid", () => {
    const { container } = render(<PackageForm />);

    fireEvent.change(screen.getByPlaceholderText(/safari/i), {
      target: { value: "Safari Trip" },
    });

    const durationInputs = screen.getAllByRole("spinbutton");
    fireEvent.change(durationInputs[0], {
      target: { value: 5 },
    });

    fireEvent.change(durationInputs[1], {
      target: { value: 200 },
    });

    fireEvent.change(durationInputs[2], {
      target: { value: 10 },
    });

    const description = screen.getByPlaceholderText(/package description/i);
    fireEvent.change(description, {
      target: { value: "Amazing trip" },
    });

    // Query file input directly
    const fileInput = container.querySelector('input[type="file"]');
    if (fileInput) {
      fireEvent.change(fileInput, {
        target: {
          files: [new File(["test"], "img.png", { type: "image/png" })],
        },
      });
    }

    expect(screen.getByRole("button")).not.toBeDisabled();
  });
});
