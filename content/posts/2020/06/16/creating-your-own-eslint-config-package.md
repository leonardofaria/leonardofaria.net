---
id: 2206
title: Creating your own ESLint config package
publishedAt: 2020-06-16
type: Post
ogImage: /images/og-images/2206.png
permalink: /2020/06/16/creating-your-own-eslint-config-package
categories:
  - javascript
tags:
  - javascript
---

ESLint is a powerful tool to enforce consistent coding conventions and ensure quality in your JavaScript codebase. Coding conventions are sometimes difficult to decide and having a tool to automate enforcement is great to avoid unnecessary discussions. Ensuring quality is also a welcoming feature: linters are excellent tools for catching bugs, such as those related to variable scope.

ESLint is designed to be completely configurable, giving you the option of enabling/disabling each rule, or mixing the rules to match your needs. With this in mind, the JavaScript community and companies who use JavaScript can extend the original ESLint config. There are [several examples](https://www.npmjs.com/search?q=eslint-config) in the npm registry: [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) is one of the most famous. 

In your daily basis, you will probably combine more than one config, since there is no one-config-fits-all. This post will show how to create your repository of configurations, giving you the option to centralize all your rule definitions.

The first step is creating a new folder and creating an npm project. [By convention](https://eslint.org/docs/developer-guide/shareable-configs), the module name begins with `eslint-config-`, such as `eslint-config-test`.

```bash
mkdir eslint-config-test
cd eslint-config-test
npm init
```

You will have a package.json file that will look like the following snippet:

```json
{
  "name": "eslint-config-test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

Next, time to add your ESLint dependencies:

```bash
npm install -D eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier
```

The packages will change according to your needs. In this case, I work with React codebases and I use [Prettier](https://prettier.io/) to format my code. The [documentation](https://eslint.org/docs/developer-guide/shareable-configs#publishing-a-shareable-config) mentions that if your shareable config depends on a plugin, you should also specify it as a `peerDependency`. 

Next, I will create a `.eslintrc.js` with my configuration - this is similar to what you already do in your apps:

```js
module.exports = {
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  plugins: [
    'react-hooks',
  ],
  rules: {
  },
};
```

The `rules` object stores any rule that you want to override. In the snippet above `rules` is empty but feel free to check [my overrides](https://github.com/leonardofaria/eslint-config-leozera/blob/master/.eslintrc.js#L14:L58). In the airbnb/javascript repository you can [find a list of overridden rules](https://github.com/airbnb/javascript/issues/1089) by the community. 

Time to create a `.prettierrc` with your custom rules - this is a tricky part since Prettier and ESLint can conflict in a few rules:

```json
{
  "tabWidth": 2
}
```

It is important to mention that the `.prettierrc` file should live in the root of the project that is using your package. Right now, I am manually copying it. Next step is exporting your config in the `index.js` file: 

```js
const eslintrc = require('./.eslintrc.js');

module.exports = eslintrc;
```

It is technically possible to create all configuration in the `index.js` file however you wouldn't get the config object linted (insert your [Inception](https://www.imdb.com/title/tt1375666/) joke here).

_Voilà!_ That's all you need to start your own package of configurations. You can test locally your config package by running, in a JavaScript project:

```bash
npm install /Users/leonardo/path/to/eslint-config-test
```

Keep in mind that the dependencies of your configuration package may also be installed.

If everything looks fine, you can publish to the npm registry:

```bash
npm publish
```

## Full example

I have a functional GitHub project showing the setup of this post: [eslint-config-leozera](https://github.com/leonardofaria/eslint-config-leozera). You can also see it below:

<div className="full-width">
  <iframe
     src="https://codesandbox.io/embed/github/leonardofaria/eslint-config-leozera/tree/master/?fontsize=14&theme=dark"
     title="leonardofaria/eslint-config-leozera"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-autoPlay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
</div>

## More about it

- [Configuring ESLint](https://eslint.org/docs/user-guide/configuring): official ESLint docs. You know, _read the docs_
- [How to publish your first NPM package](https://medium.com/@bretcameron/how-to-publish-your-first-npm-package-b224296fc57b): quoting the post subtitle", everything you need to know to create a NPM package"
- [eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos): a project by [Wes Bos](https://www.wesbos.com/) that help me doing this work
