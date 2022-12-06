export const Clients = [
  {
    name: "Nethermind",
    github: "https://github.com/NethermindEth/nethermind",
    docs: "https://docs.nethermind.io/nethermind/first-steps-with-nethermind/getting-started",
    contact: "https://discord.com/invite/PaCMRFdvWT",
    status: "stable",
    supports: "Linux, Win, macOS",
    donate: "https://gitcoin.co/grants/142/nethermind",
    img: "https://nethermind.io/wp-content/uploads/2022/04/Logo-icon.svg",
    installation: `brew tap nethermindeth/nethermind

      brew install nethermind`,
  },
  {
    name: "Erigon",
    github: "https://github.com/ledgerwatch/erigon",
    docs: "https://github.com/ledgerwatch/erigon#usage",
    contact: "",
    status: "alpha & beta",
    supports: "Linux, Win, macOS, ARM",
    donate: "https://etherscan.io/address/0x8BFBB529A9E85fDC4b70A4FCdC0D68Bb298B8816",
    img: "",
    installation: `
      git clone --recurse-submodules -j8 https://github.com/ledgerwatch/erigon.git

      cd erigon
      
      make erigon
      
      ./build/bin/erigon
`,
  },
  {
    name: "Besu",
    github: "https://github.com/hyperledger/besu/",
    docs: "https://besu.hyperledger.org/en/stable/",
    contact: "https://discord.com/invite/hyperledger",
    status: "stable",
    supports: "Linux, Win, macOS",
    donate: "https://protocol-guild.readthedocs.io/en/latest/index.html",
    img: "https://www.hyperledger.org/wp-content/uploads/2021/10/hyperledgerfoundation_horizontal-dark.svg",
    installation: `
      brew tap hyperledger/besu 
      brew install hyperledger/besu/besu
      `,
  },
  {
    name: "Geth",
    github: "https://github.com/ethereum/go-ethereum",
    docs: "https://geth.ethereum.org/docs/",
    contact: "https://discord.com/invite/nthXNEv",
    status: "stable",
    supports: "Linux, Win, macOS, ARM",
    donate: "https://gitcoin.co/grants/6128/go-ethereum-geth",
    img: "https://geth.ethereum.org/static/images/mascot.png",
    installation: `brew tap ethereum/ethereum

      brew install ethereum
      
      brew install ethereum --devel`,
  },
];