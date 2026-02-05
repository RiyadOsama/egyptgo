'use client';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { useState, useEffect } from 'react';
import { useCreateUser } from '@/hooks/use-user';
import { useRouter } from 'next/navigation';
import { Loader2, CheckCircle2 } from 'lucide-react';

export default function AdminForm() {
  const [userName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();

  const createUser = useCreateUser();

  const isFormValid = userName.trim() !== '' && email.trim() !== '' && email.includes('@') && password.trim() !== '';

  const createUserHandler = (e) => {
    e.preventDefault();
    let role = 'admin';

    createUser.mutate(
      { userName, email, password, role },
      {
        onSuccess: () => {
          setShowSuccess(true);
          setName('');
          setEmail('');
          setPassword('');
          setTimeout(() => {
            setShowSuccess(false);
            router.push('/dashboard');
          }, 2000);
        },
      },
    );
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {showSuccess && (
        <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3">
          <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
          <p className="text-sm text-green-800 dark:text-green-300 font-medium">Admin created successfully!</p>
        </div>
      )}

      <div className="space-y-5">
        <div>
          <Label htmlFor="name" className="text-foreground font-semibold mb-2 block">
            Username
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="admin123"
            value={userName}
            onChange={(e) => setName(e.target.value)}
            disabled={createUser.isPending}
            className="bg-background border-border focus:ring-primary/50 focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-foreground font-semibold mb-2 block">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="admin@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={createUser.isPending}
            className="bg-background border-border focus:ring-primary/50 focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <div>
          <Label htmlFor="password" className="text-foreground font-semibold mb-2 block">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter a secure password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={createUser.isPending}
            className="bg-background border-border focus:ring-primary/50 focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <button
          type="submit"
          onClick={createUserHandler}
          disabled={!isFormValid || createUser.isPending}
          className={`
            w-full px-4 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2
            ${
              isFormValid && !createUser.isPending
                ? 'bg-primary text-primary-foreground cursor-pointer hover:opacity-90 active:scale-[0.98]'
                : 'bg-muted text-muted-foreground cursor-not-allowed opacity-60'
            }`}
        >
          {createUser.isPending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Creating Admin...
            </>
          ) : (
            'Add Admin'
          )}
        </button>
      </div>
    </div>
  );
}
