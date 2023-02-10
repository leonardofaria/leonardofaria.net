export function Badge({
  children,
  variation,
}: {
  children: string;
  variation: 'primary' | 'secondary';
}) {
  let variationClasses = 'bg-indigo-500 text-indigo-100';

  if (variation === 'secondary') {
    variationClasses =
      'transition duration-300 ease-in-out bg-orange-100 text-orange-800 hover:bg-orange-300';
  }

  return (
    <span
      className={`flex rounded-full px-2 py-1 text-xs font-bold uppercase ${variationClasses}`}
    >
      {children}
    </span>
  );
}
