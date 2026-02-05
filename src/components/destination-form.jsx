'use client';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { useState, useEffect } from 'react';
import { useCreateDestination, useUpdateDestination, useGetDestinationById } from '@/hooks/use-destinations';
import { useRouter } from 'next/navigation';
import { Loader2, Upload } from 'lucide-react';

export default function DestinationForm({ id }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const router = useRouter();

  const { data: destination, isLoading, isError } = useGetDestinationById(id);
  console.log('Destination data in form:', destination);

  const createDestinationMutation = useCreateDestination();
  const editDestinationMutation = useUpdateDestination();

  useEffect(() => {
    if (destination) {
      setName(destination.data.name);
      setDescription(destination.data.description);
      setImagePreview(destination.data.image.url);
    }
  }, [destination]);

  const isFormValid = name.trim() !== '' && description.trim() !== '' && (id ? true : image !== null);

  const createDestinationHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    if (image) {
      formData.append('image', image);
    }
    createDestinationMutation.mutate(formData, {
      onSuccess: () => {
        router.push('/dashboard/destinations');
      },
    });
    setName('');
    setDescription('');
    setImage(null);
  };

  const editDestinationHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    if (image) {
      formData.append('image', image);
    }
    editDestinationMutation.mutate(
      { id, data: formData },
      {
        onSuccess: () => {
          router.push('/dashboard/destinations');
        },
      },
    );
    setName('');
    setDescription('');
    setImage(null);
  };

  const isSubmitting = createDestinationMutation.isPending || editDestinationMutation.isPending;

  return (
    <div className="max-w-2xl mx-auto">
      <form className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-foreground font-semibold mb-2.5 block">
            Destination Name
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="e.g. Cairo, Giza, Luxor"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isSubmitting}
            className="bg-background border-border focus:ring-primary/50 focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed rounded-lg"
          />
        </div>

        <div>
          <Label htmlFor="description" className="text-foreground font-semibold mb-2.5 block">
            Description
          </Label>
          <textarea
            id="description"
            className="w-full border border-border rounded-lg p-3 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            rows="5"
            placeholder="Describe the destination in detail. What makes it special?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={isSubmitting}
          />
        </div>

        <div>
          <Label htmlFor="image" className="text-foreground font-semibold mb-2.5 block flex items-center gap-2">
            <Upload className="h-4 w-4" />
            Destination Image
          </Label>
          <Input
            id="image"
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                setImage(e.target.files[0]);
                setImagePreview(URL.createObjectURL(e.target.files[0]));
              }
            }}
            disabled={isSubmitting}
            className="bg-background border-border focus:ring-primary/50 focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed rounded-lg cursor-pointer"
          />
          {!id && <p className="text-sm text-muted-foreground mt-1.5">Image is required for new destinations</p>}
        </div>

        {imagePreview && (
          <div className="flex flex-col items-start gap-3">
            <p className="text-sm font-medium text-foreground">Image Preview:</p>
            <img
              src={imagePreview}
              alt="Image Preview"
              className="rounded-lg w-48 h-32 object-cover border border-border"
            />
          </div>
        )}

        <button
          type="submit"
          onClick={id ? editDestinationHandler : createDestinationHandler}
          disabled={!isFormValid || isSubmitting}
          className={`
            w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2
            ${isFormValid && !isSubmitting ? 'bg-primary text-primary-foreground cursor-pointer hover:opacity-90 active:scale-[0.98]' : 'bg-muted text-muted-foreground cursor-not-allowed opacity-60'}
          `}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              {id ? 'Updating...' : 'Creating...'}
            </>
          ) : id ? (
            'Update Destination'
          ) : (
            'Create Destination'
          )}
        </button>
      </form>
    </div>
  );
}
