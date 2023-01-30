import { ReactNode } from 'react';

export function Article({ children, ...rest }: { children: ReactNode }) {
  return (
    <article {...rest}>
      <div className={`rounded px-6 lg:mx-4 `}>
        <div className="m-auto max-w-3xl text-gray-500">{children}</div>
      </div>
    </article>
  );
}
