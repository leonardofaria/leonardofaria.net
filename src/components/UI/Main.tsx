import { ReactNode } from 'react';

export function Main({ children, ...rest }: { children: ReactNode }) {
  return (
    <main
      className="mx-auto mt-24 w-full max-w-7xl flex-1 text-gray-700"
      {...rest}
    >
      {children}
    </main>
  );
}
