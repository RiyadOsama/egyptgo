'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import SelectMenu from "./select-menu";
import {
  useCreatePackage,
  useUpdatePackage,
  useGetPackageById,
} from "@/hooks/use-packages";
import { useGetAllDestinations } from "@/hooks/use-destinations";

export default function PackageForm({ id }) {
  const router = useRouter();
  const isEdit = Boolean(id);

  const { data: packageData } = useGetPackageById(id, { enabled: isEdit });
  const { data: destinationsData } = useGetAllDestinations();

  const createPackage = useCreatePackage();
  const updatePackage = useUpdatePackage(id);

  const [form, setForm] = useState({
    name: "",
    duration: "",
    price: "",
    destinationId: "",
    groupSize: "",
    activities: "",
    description: "",
    image: null,
    imagePreview: null,
  });

  useEffect(() => {
    if (packageData?.data) {
      const p = packageData.data;
      setForm({
        name: p.name,
        duration: p.duration,
        price: p.price,
        destinationId: String(p.destinationId),
        groupSize: p.groupSize,
        activities: p.included.join(", "),
        description: p.description,
        image: null,
        imagePreview: p.image?.url || null,
      });
    }
  }, [packageData]);

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const isFormValid =
  form.name.trim() !== "" &&
  form.description.trim() !== "" &&
  form.duration !== "" &&
  form.groupSize !== "" &&
  form.price !== "" &&
  // form.destinationId !== "" &&
  (id ? true : form.image !== null);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("description", form.description);
    formData.append("duration", Number(form.duration));
    formData.append("groupSize", Number(form.groupSize));
    formData.append("price", Number(form.price));
    formData.append("destinationId", form.destinationId);
    formData.append(
      "included",
      JSON.stringify(form.activities.split(",").map(a => a.trim()))
    );

    if (form.image) formData.append("image", form.image);

    isEdit
      ? updatePackage.mutate(
        {id, data: formData},
        {
          onSuccess: () => {
            router.push("/dashboard/packs");
          }
        }
      )
      : createPackage.mutate(formData, {
        onSuccess: () => {
          router.push("/dashboard/packs");
        }
      });
  };

  return (
    <div>
      {/* Form */}
      <form onSubmit={submitHandler} className="p-8 space-y-6">
        <div>
          <Label>Package Name</Label>
          <Input
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="e.g. Safari Experience"
            className="rounded-xl mt-1"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label>Duration (Days)</Label>
            <Input
              type="number"
              value={form.duration}
              onChange={(e) => handleChange("duration", e.target.value)}
              className="rounded-xl mt-1"
            />
          </div>
          <div>
            <Label>Price</Label>
            <Input
              type="number"
              value={form.price}
              onChange={(e) => handleChange("price", e.target.value)}
              className="rounded-xl mt-1"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label>Destination</Label>
            <div className="mt-1">
              <SelectMenu
                key={`destination-${id}-${form.destinationId}`}
                destinationsData={destinationsData}
                value={form.destinationId}
                onChange={(id) => handleChange("destinationId", id)}
              />
            </div>
          </div>
          <div>
            <Label>Group Size</Label>
            <Input
              type="number"
              value={form.groupSize}
              onChange={(e) => handleChange("groupSize", e.target.value)}
              className="rounded-xl mt-1"
            />
          </div>
        </div>

        <div>
          <Label>Activities</Label>
          <textarea
            rows={3}
            value={form.activities}
            onChange={(e) => handleChange("activities", e.target.value)}
            className="w-full rounded-xl px-4 py-3 mt-1 border border-border bg-background"
            placeholder="Enter activities separated by commas"
          />
        </div>

        <div>
          <Label>Description</Label>
          <textarea
            rows={4}
            value={form.description}
            onChange={(e) => handleChange("description", e.target.value)}
            className="w-full rounded-xl px-4 py-3 mt-1 border border-border bg-background"
            placeholder="Package description"
          />
        </div>

        <div>
          <Label>Image</Label>
          <Input
            type="file"
            accept="image/*"
            className="rounded-xl mt-1"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                handleChange("image", file);
                handleChange("imagePreview", URL.createObjectURL(file));
              }
            }}
          />
        </div>

        {form.imagePreview && (
          <img
            src={form.imagePreview}
            className="w-40 h-40 rounded-xl object-cover"
            alt="preview"
          />
        )}

        <button
          type="submit"
          className={
            `py-3 px-3 rounded-xl font-bold active:scale-[0.97] transition-all bg-primary text-primary-foreground
            ${isFormValid
              ? "cursor-pointer shadow-[0_10px_20px_var(--color-primary)/20] hover:opacity-90"
              : "cursor-not-allowed opacity-60"}
          `}
          disabled={!isFormValid || createPackage.isLoading || updatePackage.isLoading}
        >
          {isEdit ? "Update Package" : "Create Package"}
        </button>
      </form>
    </div>
  );
}
