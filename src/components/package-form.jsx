'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Label } from './ui/label';
import { Input } from './ui/input';
import SelectMenu from './select-menu';
import { useCreatePackage, useUpdatePackage, useGetPackageById } from '@/hooks/use-packages';
import { useGetAllDestinations } from '@/hooks/use-destinations';
import { Loader2, Upload, MapPin } from 'lucide-react';

export default function PackageForm({ id }) {
  const router = useRouter();
  const isEdit = Boolean(id);
  console.log(id);

  const { data: packageData } = useGetPackageById(id);
  const { data: destinationsData } = useGetAllDestinations();

  const createPackage = useCreatePackage();
  const updatePackage = useUpdatePackage(id);

  const [form, setForm] = useState({
    name: '',
    duration: '',
    price: '',
    destinationId: '',
    groupSize: '',
    activities: '',
    description: '',
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
        activities: p.included.join(', '),
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
    form.name.trim() !== '' &&
    form.description.trim() !== '' &&
    form.duration !== '' &&
    form.groupSize !== '' &&
    form.price !== '' &&
    // form.destinationId !== "" &&
    (id ? true : form.image !== null);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('description', form.description);
    formData.append('duration', Number(form.duration));
    formData.append('groupSize', Number(form.groupSize));
    formData.append('price', Number(form.price));
    formData.append('destinationId', form.destinationId);
    formData.append('included', JSON.stringify(form.activities.split(',').map((a) => a.trim())));

    if (form.image) formData.append('image', form.image);

    isEdit
      ? updatePackage.mutate(
          { id, data: formData },
          {
            onSuccess: () => {
              router.push('/dashboard/packs');
            },
          },
        )
      : createPackage.mutate(formData, {
          onSuccess: () => {
            router.push('/dashboard/packs');
          },
        });
  };

  const isSubmitting = createPackage.isPending || updatePackage.isPending;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Form */}
      <form onSubmit={submitHandler} className="space-y-6">
        <div>
          <Label className="text-foreground font-semibold mb-2.5 block">Package Name</Label>
          <Input
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
            disabled={isSubmitting}
            placeholder="e.g. Egyptian Wonders Tour"
            className="rounded-lg mt-1 bg-background border-border focus:ring-primary/50 focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label className="text-foreground font-semibold mb-2.5 block">Duration (Days)</Label>
            <Input
              type="number"
              value={form.duration}
              onChange={(e) => handleChange('duration', e.target.value)}
              disabled={isSubmitting}
              className="rounded-lg mt-1 bg-background border-border focus:ring-primary/50 focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed"
              min="1"
            />
          </div>
          <div>
            <Label className="text-foreground font-semibold mb-2.5 block">Price ($)</Label>
            <Input
              type="number"
              value={form.price}
              onChange={(e) => handleChange('price', e.target.value)}
              disabled={isSubmitting}
              className="rounded-lg mt-1 bg-background border-border focus:ring-primary/50 focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed"
              min="0"
              step="0.01"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label className="text-foreground font-semibold mb-2.5 flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Destination
            </Label>
            <div className="mt-1">
              <SelectMenu
                key={`destination-${id}-${form.destinationId}`}
                destinationsData={destinationsData}
                value={form.destinationId}
                onChange={(id) => handleChange('destinationId', id)}
              />
            </div>
          </div>
          <div>
            <Label className="text-foreground font-semibold mb-2.5 block">Group Size</Label>
            <Input
              type="number"
              value={form.groupSize}
              onChange={(e) => handleChange('groupSize', e.target.value)}
              disabled={isSubmitting}
              className="rounded-lg mt-1 bg-background border-border focus:ring-primary/50 focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed"
              min="1"
            />
          </div>
        </div>

        <div>
          <Label className="text-foreground font-semibold mb-2.5 block">Included Activities</Label>
          <textarea
            rows={3}
            value={form.activities}
            onChange={(e) => handleChange('activities', e.target.value)}
            disabled={isSubmitting}
            className="w-full rounded-lg px-4 py-3 mt-1 border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Enter activities separated by commas (e.g. Camel ride, Pyramid tour, Museum visit)"
          />
        </div>

        <div>
          <Label className="text-foreground font-semibold mb-2.5 block">Description</Label>
          <textarea
            rows={4}
            value={form.description}
            onChange={(e) => handleChange('description', e.target.value)}
            disabled={isSubmitting}
            className="w-full rounded-lg px-4 py-3 mt-1 border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Describe the package. What will guests experience?"
          />
        </div>

        <div>
          <Label className="text-foreground font-semibold mb-2.5 flex items-center gap-2">
            <Upload className="h-4 w-4" />
            Package Image
          </Label>
          <Input
            type="file"
            accept="image/*"
            disabled={isSubmitting}
            className="rounded-lg mt-1 bg-background border-border focus:ring-primary/50 focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                handleChange('image', file);
                handleChange('imagePreview', URL.createObjectURL(file));
              }
            }}
          />
          {!id && <p className="text-sm text-muted-foreground mt-1.5">Image is required for new packages</p>}
        </div>

        {form.imagePreview && (
          <div className="flex flex-col items-start gap-3">
            <p className="text-sm font-medium text-foreground">Image Preview:</p>
            <img
              src={form.imagePreview}
              className="w-48 h-32 rounded-lg object-cover border border-border"
              alt="preview"
            />
          </div>
        )}

        <button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className={`w-full py-3 rounded-lg font-bold active:scale-[0.98] transition-all flex items-center justify-center gap-2
            ${
              isFormValid && !isSubmitting
                ? 'bg-primary text-primary-foreground cursor-pointer shadow-[0_10px_20px_var(--color-primary)/20] hover:opacity-90'
                : 'bg-muted text-muted-foreground cursor-not-allowed opacity-60'
            }
          `}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              {isEdit ? 'Updating...' : 'Creating...'}
            </>
          ) : isEdit ? (
            'Update Package'
          ) : (
            'Create Package'
          )}
        </button>
      </form>
    </div>
  );
}
