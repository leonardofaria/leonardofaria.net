import { ReactNode } from 'react';

export function H1({ children, ...rest }: { children: ReactNode }) {
  return (
    <h1
      className="text-3xl font-semibold leading-9 tracking-tighter text-gray-700 lg:text-4xl"
      {...rest}
    >
      {children}
    </h1>
  );
}
