---
id: 2233
title: Building TypeScript definitions on demand
publishedAt: 2022-02-07 01:00:00
type: Post
ogImage: /images/og-images/2233.png
permalink: /2022/02/07/building-typescript-definitions-on-demand
categories:
  - javascript
tags:
  - javascript
---

I recently came across an interesting problem: is it possible to dynamically create TypeScript definitions for a React component library that doesn't use TypeScript at all? Something like a <A href="https://github.com/DefinitelyTyped/DefinitelyTyped">DefinitelyTyped package</A> for a private NPM package?

## The problem 

Let me detail the problem a bit better. Consider the Button component below:

```jsx title="Button.tsx"
import PropTypes from "prop-types";

const Button = ({ appearance, children, ...props }) => {
 return (
  <button className={`button--${appearance}`} {...props}>
   {children}
  </button>
 );
};

Button.propTypes = {
 /** Type of the button */
 appearance: PropTypes.oneOf(["primary", "secondary"]),
 /** Content for the button */
 children: PropTypes.node.isRequired
};

Button.displayName = 'Button';

export default Button;
```

This component is very straightforward: a `<button>` that will be accordingly styled with the value of appearance.

Now imagine that a new developer joined the company and they shipped their very first feature with the following Button:

```jsx
<Button variant="link">Buy now</Button>
```

The new developer used to work with [Material UI](https://mui.com/components/buttons/) and `variant="link"` came from their old days. No one noticed that the Button didn't look like the others in the application.

It would be great to have a warning in our editor mentioning that `variant` is not a valid prop for `<Button>`. It would be great to have an autocomplete feature in our editor, so the developer could learn the component API as they work in the codebase. TypeScript solves these problems; however, the codebase doesn't use TS. 

In addition, the Button is imported from a private NPM package. If the repository and packages were public, probably someone would create definitions and add them in the <A href="https://github.com/DefinitelyTyped/DefinitelyTyped">DefinitelyTyped</A> repository.

Going back to the initial question of this post: is it possible to dynamically create TypeScript definitions for a React component library that doesn't use TypeScript at all? YES!

## The solution

I am using the <A href="https://www.npmjs.com/package/react-to-typescript-definitions">react-to-typescript-definitions</A> package to create definitions from the compiled files. The tool can map most PropTypes (`any`, `array`, `bool`, `func`, `number`, `object`, `string`, `node`, `element`, `oneOfType`, `arrayOf`, `symbol`, `shape`) and identify the required ones. The package partially support `oneOf` PropType and can even re-use your comments.

You can create definitions from the command line or import the functionality into a script with this tool. Here is one example:

```js
import { generateFromFile } from "react-to-typescript-definitions";

generateFromFile(null, "Button.js", {}, "react");
```

The function `generateFromFile` will return something like:

```js
export type ButtonAppearance = "primary" | "secondary";

export interface ButtonProps {
    // All other props
    [x:string]: any;
    /**
     * Type of the button
     */
    appearance?: ButtonAppearance;
    /**
     * Content for the button
     */
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps>;
```

A few highlights:
The tool reused the comments ("Type of the button", "Content for the button") from the original component;
The tool identified appearance as optional and children as required props;
The tool created a variable with the possible values of appearance;

### In real life

We have two options of usage of this package.

#### CLI

CLI can be helpful for one-off scenarios or for when you want to test things out. The example that I posted above could be created by running:

```
cat src/components/Button/Button.js | yarn --silent react2dts --top-level-module Button
```

#### Node module

Importing the package into your toolbox scripts gives you the flexibility to customize what needs definitions and define what to do with the data. Here is what I am doing:

I created a script that imports all components from my main `index.js` file (`import * as componentLibrary from './src/index.js';`). This `index.js` looks like this:

```js
export { default as Avatar } from './components/Avatar';
export { default as Badge } from './components/Badge';
export { default as Button } from './components/Button';
```

For each of these components, I call the `generateFromFile` function:

```js
import * as componentLibrary from './src/index.js';

let definitionsContent = '';
const components = Object.keys(componentLibrary);

components.forEach((component) => {
  if (
    typeof componentLibrary[component] === 'function' &&
    componentLibrary[component].filename !== undefined
  ) {
    const definitions = generateFromFile(
      null,
      componentLibrary[component].filename,
      {},
      'react'
    );

    definitionsContent = `${definitionsContent}${definitions}`;
  }
});
``` 

The `definitionsContent` variable might have some duplicated content, for example, multiple `import * as React from 'react';`. After cleaning this, I store the content of this variable in the `dist/es/index.d.ts`. Finally, in the `package.json`, I mention the location of the types:

```json
{
  "module": "dist/es/index.js",
  "types": "dist/es/index.d.ts",
  "files": [
    "dist/*"
  ]
}
```

This script is executed in CI environmnent. When someone publishes a new version of the component library:

1. We build the package using rollup, saving the files in the `dist` folder;
2. We execute the script to create the TypeScript definitions;
3. We run `npm publish` (currently with Lerna)
4. We make release notes with Lerna

What do you think of this solution? Let me know in the comments.
