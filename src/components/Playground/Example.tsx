import { Playground } from './Playground';

export function Example() {
  const files = {
    '/App.tsx': `export default function App() { 
  return (
    <>
      <h1>VANCOUVER</h1>
      <h2>CANADA</h2>
    </>
  );
};`,

    '/styles.css': `
h1 {
  background: #000;
  color: #fff;
  mix-blend-mode: multiply;
  
  padding: 2%;
}

h2 {
  background: #fff;
  color: #000;
  mix-blend-mode: color-dodge;
  
  padding: 2%;
}

body {
  background: url('https://images.unsplash.com/photo-1541369866856-c4f5aa6f5807?ixlib=rb-1.2.1');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  font-family: sans-serif;
  height: 100vh;
}
`,
  };

  return <Playground files={files} />;
}
