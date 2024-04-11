import { useSandpack } from '@codesandbox/sandpack-react';

export default function CustomTabs() {
  const { sandpack } = useSandpack();
  const { visibleFiles, activeFile, setActiveFile } = sandpack;

  return (
    <nav className="-mb-px flex space-x-6 overflow-y-scroll">
      {visibleFiles.map((name) => (
        <button
          className={`group inline-flex items-center border-b-2 border-transparent px-1 py-2 text-sm font-medium transition duration-300 ease-in-out hover:border-gray-300 hover:text-gray-700 ${
            name === activeFile
              ? 'border-indigo-500 text-indigo-600'
              : 'text-gray-500'
          }`}
          data-active={name === activeFile}
          key={name}
          type="button"
          onClick={() => setActiveFile(name)}
        >
          {name.startsWith('/') ? name.replace('/', '') : name}
        </button>
      ))}
    </nav>
  );
}
