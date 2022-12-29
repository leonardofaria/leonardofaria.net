export default function Footer() {
  return (
    <footer className="w-full max-w-7xl mx-auto text-center border-t border-gray-200 py-9 px-3 mt-9 pin-b text-sm text-gray-500">
      Made with{' '}
      <a
        className="underline transition duration-300 ease-in-out hover:text-blue-600"
        href="https://gohugo.io"
      >
        Hugo
      </a>{' '}
      and{' '}
      <a
        className="underline transition duration-300 ease-in-out hover:text-blue-600"
        href="https://github.com/leonardofaria/bento"
      >
        Bento theme
      </a>
      .
    </footer>
  );
}
