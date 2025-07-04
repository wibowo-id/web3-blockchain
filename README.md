<div align="center">
<h1><strong> Web3 Blockchain </strong></h1>

[![Stargazers](https://img.shields.io/github/stars/wibowo-id/web3-blockchain)](https://github.com/wibowo-id/web3-blockchain/stargazers)
[![Forks](https://img.shields.io/github/forks/wibowo-id/web3-blockchain)](https://github.com/wibowo-id/web3-blockchain/issues)
[![Issues](https://img.shields.io/github/issues/wibowo-id/web3-blockchain)](https://github.com/wibowo-id/web3-blockchain/issues)
[![MIT License](https://img.shields.io/github/license/wibowo-id/web3-blockchain)](https://github.com/wibowo-id/web3-blockchain/blob/main/License)
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-blue?style=flat&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/chandra-wibowo-819b4b215/)

</div>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Description](#description)
- [Built With](#built-with)
- [Installation](#installation)
  - [Make sure you have the following ready:](#make-sure-you-have-the-following-ready)
  - [Once your config is ready, create a new repo, open your favorite code editor, and clone the repo with the following cmd:](#once-your-config-is-ready-create-a-new-repo-open-your-favorite-code-editor-and-clone-the-repo-with-the-following-cmd)
  - [Install all package dependencies by running:](#install-all-package-dependencies-by-running)
  - [Add your API keys in the .env file:](#add-your-api-keys-in-the-env-file)
  - [start the web3-blockchain:](#start-the-web3-blockchain)
- [Features:](#features)
  - [⭐️ ... and don't forget to leave a star if you like it! ⭐️](#️--and-dont-forget-to-leave-a-star-if-you-like-it-️)

## Description

Simple and minimalist Web3 blockchain to boost your Dapp development. Don't waste time setting up CRA, Typescript, react-script v5 polyfill, and connecting metamask and other wallets any longer. Instead, get this web3-blockchain and start coding right away with the latest stack available out there!

Try it yourself: [https://web3-blockchain.wibowo.id/](https://web3-blockchain.wibowo.id/)

## Built With

- [![React][react.js]][react-url]
- [![typescript]][typescript-url]
- [![AntDesign]][antdesign-url]
- [![web3react]][web3react-url]
- [![prettier]][prettier-url]
- [![ESLint]][eslint-url]

## Installation

### Make sure you have the following ready:

- [node.js](https://nodejs.org/) installed (developed on LTS v18)
- [typescript](https://www.typescriptlang.org/) installed (developed on v5.2.2)
- [yarn](https://yarnpkg.com/) installed
- [MetaMask](https://metamask.io/) (or any web3 compatible wallet) installed in your browser

### Once your config is ready, create a new repo, open your favorite code editor, and clone the repo with the following cmd:

```bash
git clone https://github.com/wibowo-id/web3-blockchain.git .
```

### Install all package dependencies by running:

```bash
yarn install
```

<b>IMPORTANT: Double-check your package.json to make sure you've installed the exact same version for all @web3-react packages. Since the version 8+ is still in beta, it may not be automatically installed.</b>

### Add your API keys in the .env file:

Create a .env file at the root of your project and copy the content of the .env.example file into it. Then, fill in the following variables:

```js
REACT_APP_INFURA_KEY = "your API key here";
...
REACT_APP_WALLETCONNECT_PROJECT_ID = "Project id needed for WalletConnect v2";
```

### start the web3-blockchain:

```bash
yarn start
```

## Features:

- [x] Web3 Wallet (Metamask / Wallet connect / Coinbase)
- [x] Chain selector
- [x] Wallet balance
- [x] Sign Messages & Transfer Native
- [x] Dark mode support
- [x] Hook to query user's Token Balances
- [ ] Hook to query user's NFTs

<br></br>

<div align="center">
<h2> Enjoy!!!</h2>

### ⭐️ ... and don't forget to leave a star if you like it! ⭐️

</div>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[react.js]: https://img.shields.io/badge/React_v18.2-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[typescript]: https://img.shields.io/badge/typescript_v5.3.3-375BD2?style=for-the-badge&logo=typescript&logoColor=61DAFB
[typescript-url]: https://www.typescriptlang.org/
[web3react]: https://img.shields.io/badge/@web3react_v8.2-006600?style=for-the-badge&logo=web3-react&logoColor=4FC08D
[web3react-url]: https://github.com/Uniswap/web3react#readme
[antdesign]: https://img.shields.io/badge/AntDesign_v5.12.5-FF0000?style=for-the-badge&logo=AntDesign&logoColor=61DAFB
[antdesign-url]: https://ant.design/
[prettier]: https://img.shields.io/badge/Prettier-360D3A?style=for-the-badge&logo=Prettier&logoColor=61DAFB
[prettier-url]: https://prettier.io/
[eslint]: https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=61DAFB
[eslint-url]: https://eslint.org/
