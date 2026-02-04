'use client';

import { useEffect, useState } from 'react';
import { Heart, Coffee } from 'lucide-react';

export default function Footer() {
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="max-w-6xl w-full mx-auto border-t mt-16">
      <div className="max-w-6xl mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <div className="flex gap-1">
          <p className="font-medium text-foreground">EgyptGo</p>
          <p>© {year || '2026'} All rights reserved.</p>
        </div>

        <p className="flex items-center gap-1.5 group">
          <span>Made with</span>
          <Heart size={16} className="fill-red-500 text-red-500 animate-pulse transition-transform duration-300" />
          <span>and plenty of</span>
          <Coffee size={16} className="text-amber-700 group-hover:rotate-12 transition-transform duration-300" />
        </p>
      </div>
    </footer>
  );
}
