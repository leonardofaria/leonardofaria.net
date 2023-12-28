import { ReactNode } from 'react';

export function H2({ children, ...rest }: { children: ReactNode }) {
  return (
    <h1
      className="text-2xl font-semibold tracking-tighter text-charade-700 lg:text-3xl"
      {...rest}
    >
      {children}
    </h1>
  );
}
