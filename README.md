# @jonthemiller/eslint-config-typescript

> A ESLint ruleset for Typescript projects

## Installation

1. Install this package and `eslint` in your `devDependencies`.

```bash
npm install --save-dev @jonthemiller/eslint-config-typescript eslint
yarn add -D @jonthemiller/eslint-config-typescript eslint
```

2. Extend the default config by creating an `.eslintrc.cjs`:

```js
module.exports = {
  root: true,
  extends: ['@jonthemiller/typescript-config-eslint'],
};
```

You might also want to add a script entry to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

## Contributing

We welcome contributions to this ruleset, given the changes are widely applicable enough to be useful. To contribute a change simply make a pull request and ensure the following is done:

* Increment the version in the `package.json`. For tweaks/fixes, the bugfix version can increment. For new rules, the minor version.
* Once merged, create and publish a `Release` in the repo page. Its name should match the version from above (this is for tracking purposes so there is a changelog generated).
* Once tagged, run `npm publish` when on that commit to create the new version of the package.
