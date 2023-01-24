# braintree-types

# ⚠️ This package is now deprecated

> **Custom Actions** is still in preview, email custom-actions-requests@braintreepayments.com to learn more.

TypeScript definitions for [Braintree](https://www.braintreepayments.com) [Custom Actions](https://github.com/braintree/custom-actions-docs) event handlers.

<details>
<summary><strong>Contents</strong></summary>

- [braintree-types](#braintree-types)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Release a new version](#release-a-new-version)

</details>

## Installation

> **Note:** This package is not yet available on [npm](https://www.npmjs.com).

```sh
npm i -D git://github.com/braintree/braintree-types.git#semver:^5.1.0
```

## Usage

In a TypeScript file:

```js
import { BraintreeTransaction } from "braintree-types";

const transaction: BraintreeTransaction = {};
```

## Release a new version

To tag a new version, ensure you have committed all changes and then run:

```sh
npm version <major|minor|patch> -m "Release version %s" && \
git push -u origin master --tags
```
