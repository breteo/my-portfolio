import Nav from '@/components/Hero/Nav/Nav';
import type { ReactNode } from 'react';

export default function PlaygroundLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-full flex flex-col items-center justify-center">
      <Nav />
      {children}
    </div>
  );
}
