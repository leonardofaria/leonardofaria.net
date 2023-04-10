import { ReactNode } from 'react';

export function H2({ children, ...rest }: { children: ReactNode }) {
  return (
    <h1
      className="text-charade-700 text-2xl font-semibold tracking-tighter lg:text-3xl"
      {...rest}
    >
      {children}
    </h1>
  );
}
