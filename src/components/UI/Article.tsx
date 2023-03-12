import { ReactNode } from 'react';

export function Article({
  children,
  className,
  ...rest
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    /* eslint-disable-next-line tailwindcss/no-custom-classname */
    <article className={`h-entry ${className}`} {...rest}>
      <div className={`rounded px-6 lg:mx-4 `}>
        <div className="m-auto max-w-3xl text-charade-500">{children}</div>
      </div>
    </article>
  );
}
