# Riancarlosdev Validate Credit Card

I searched for a long time for something in **javascript that validates the credit card number and returns not only the boolean but also the image, name**. As I didn't find a module with these features, so I present you this module that delivers everything that was mentioned above.

- [Installation](#installation)
- [Features](#features)
- [Quick Start](#quick-start)

## Installation

Using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
  $ npm install riancarlosdev-validate-credit-card
```

Using the
[`yarn add` command](https://classic.yarnpkg.com/lang/en/docs/cli/install/):

```console
  $ yarn add riancarlosdev-validate-credit-card
```

## Features

- Valid credit card number

## Quick Start

Here is all the functions this module has to offer.

```javascript
import { riancarlosdev } from "riancarlosdev-validate-credit-card";

const card = riancarlosdev.executeCC("123456789"); // false

const card2 = riancarlosdev.executeCC("4444555566667777"); // { name: 'Visa', image: 'https://i.ibb.co/F3L5jkq/visa.jpg' }
```
