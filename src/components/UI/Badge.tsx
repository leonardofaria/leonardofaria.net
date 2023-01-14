export function Badge({
  children,
  variation,
}: {
  children: string;
  variation: 'primary' | 'secondary';
}) {
  let variationClasses = 'bg-indigo-500 text-indigo-100';

  if (variation === 'secondary') {
    variationClasses = 'bg-orange-100 text-orange-800 hover:bg-orange-300';
  }

  return (
    <span
      className={`flex rounded-full uppercase px-2 py-1 text-xs font-bold ${variationClasses}`}
    >
      {children}
    </span>
  );
}
