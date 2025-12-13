import { writeFileSync } from 'fs';

(async () => {
  const request = await fetch(
    'https://api.github.com/repos/leonardofaria/leonardofaria.net/commits',
  );

  const commits = await request.json();

  writeFileSync('./public/commits.json', JSON.stringify(commits, null, 2));

   
  console.log('Response saved to file');
})();

export {}; // Empty export because I have to
