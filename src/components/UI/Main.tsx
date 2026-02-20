import { ReactNode } from 'react';

export function Main({
  children,
  className,
  ...rest
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main
      className={`mx-auto mt-24 w-full max-w-7xl flex-1 text-charade-700 ${className}`}
      style={{ viewTransitionName: 'main-content' }}
      {...rest}
    >
      {children}
    </main>
  );
}
