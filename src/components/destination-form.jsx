'use client';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { useState, useEffect } from 'react';
import { useCreateDestination, useUpdateDestination, useGetDestinationById } from '@/hooks/use-destinations';
import { useRouter } from 'next/navigation';

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

  const createDestinationHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    if (image) {
      formData.append('image', image);
    }
    createDestinationMutation.mutate(formData);
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

  return (
    <div>
      <div className="grid gap-2 mb-4">
        <Label htmlFor="name">name</Label>
        <Input id="name" type="text" placeholder="e.g. Paris" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="grid gap-2 mb-4">
        <Label htmlFor="description">description</Label>
        <textarea
          id="description"
          className="border rounded-md p-2"
          rows="4"
          placeholder="Enter destination description here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="grid gap-2 mb-4">
        <Label htmlFor="image">image</Label>
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
        />
      </div>
      {imagePreview && (
        <img src={imagePreview} alt="Image Preview" className="mb-4 rounded-md w-40 h-40 object-cover" />
      )}
      <button
        type="submit"
        onClick={id ? editDestinationHandler : createDestinationHandler}
        className="bg-primary cursor-pointer text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition duration-300"
      >
        {createDestinationMutation.isLoading ? 'Creating...' : 'Submit'}
      </button>
    </div>
  );
}
