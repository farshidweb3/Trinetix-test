
# MGL Exchange

A test website project for exchanging crypto.


## Installation

Install nft-market ReactProject with yarn

```bash
 cd testing
 yarn install
 yarn run dev2


 go to the backend folder
 copy .env.example to .env then config value for these variables

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=465
EMAIL_SERVICE=gmail
EMAIL=
EMAIL_PWD=""

```
    

## Deployment

To deploy this project run

```bash
 cd testing
 yarn install
 yarn run dev2
```

## List of fixed bugs
Login & verify
1. I used the Gmail service for send verify the code
2. I config mysql to do CRUD operations on the project

Web3 wallet
1. I install several packages like.

```bash
"@babel/plugin-proposal-logical-assignment-operators"
"@ethersproject/providers": "^5.7.2",
"@walletconnect/Ethereum-provider": "^2.12.2",
"view": "2.x",
"wagmi": "^2.9.7",
"web-vitals": "^1.0.1",
"web3": "^1.6.1"
```
2. I create a wallet & charge my polygon wallet 0.1$ then send the value from the wallet to the website to my trust wallet. ( for the test )
2. Changes on craco.config.js file
3. Changes on the webpack.config.js file
4. Edited testing/src/components/pages/Wallet.js  file for connect wallet ( Like meta mask, trust wallet, also i use  connect wallet for mobile to support crypto wallets connection )
5. I use Wagmi library for web3 wallet connection.

## 🚀 About Me
I'm a full-stack developer (Mahdi Farshid)

- ReactJS & NextJS
- NodeJS 
- Web3 + Solidity for smart contracts 
- Linux server management
## 🔗 Links
[![linkedin](https://www.linkedin.com/in/mahdifarshid/)](https://www.linkedin.com/in/mahdifarshid/)
