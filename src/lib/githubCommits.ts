import { writeFileSync } from 'node:fs';

(async () => {
  const request = await fetch(
    'https://api.github.com/repos/leonardofaria/leonardofaria.net/commits',
  );

  const commits = await request.json();

  writeFileSync('./public/commits.json', JSON.stringify(commits, null, 2));

  console.log('Response saved to file');
})();
