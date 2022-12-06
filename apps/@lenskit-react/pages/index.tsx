import {
  ActionIcon,
  Center,
  Flex,
  SimpleGrid,
  Text,
  Card,
  Stack,
  Title,
  TextInput,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { IconBook, IconMoonStars, IconSun } from "@tabler/icons";
import { useState } from "react";
import CollectPublication from "../components/CollectPublication";
import CreateComment from "../components/CreateComment";
import CreateMirror from "../components/CreateMirror";
import CreatePost from "../components/CreatePost";
import CreateProfile from "../components/CreateProfile";
import EditProfile from "../components/EditProfile";
import Follow from "../components/Follow";
import ProfileCard from "../components/ProfileCard";
import { PublicationCard } from "../components/PublicationCard";
import { PublicationsCard } from "../components/PublicationsCard";
import Unfollow from "../components/Unfollow";
import { BookOpenIcon, ChatBubbleLeftRightIcon, CodeBracketIcon } from "@heroicons/react/24/solid";
import { ExecutionBear } from "../components/ExecutionBear";

export default function Home() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();
  const Clients = [
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
  return (
    // bg-gradient-to-bl/20 from-blue-500 via-teal-500 to-lime-500
    // <div className={`flex flex-col items-center min-h-screen relative bg-gradient-to-bl from-blue-500 via-teal-500 to-lime-500`}>
    <div className="container">
      <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-start scrollbar-thin scrollbar-thumb-gray-900/80 scrollbar-track-gray-100 px-8">
        <div className="flex w-full items-center justify-between p-2 px-4 text-4xl font-extrabold">
          <Text
            variant="gradient"
            gradient={{ from: "lime", to: "cyan", deg: 45 }}
            sx={{ fontFamily: "Greycliff CF, sans-serif" }}
            ta="center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44px"
              height="44px"
              version="1.1"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="-200 0 1500 1300"
            >
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer" />
                <g id="_1421394342400">
                  <g>
                    <polygon
                      fill="#343434"
                      fillRule="nonzero"
                      points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 "
                    />
                    <polygon
                      fill="#8C8C8C"
                      fillRule="nonzero"
                      points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 "
                    />
                    <polygon
                      fill="#3C3C3B"
                      fillRule="nonzero"
                      points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 "
                    />
                    <polygon
                      fill="#8C8C8C"
                      fillRule="nonzero"
                      points="392.07,1277.38 392.07,956.52 -0,724.89 "
                    />
                    <polygon
                      fill="#141414"
                      fillRule="nonzero"
                      points="392.07,882.29 784.13,650.54 392.07,472.33 "
                    />
                    <polygon
                      fill="#393939"
                      fillRule="nonzero"
                      points="0,650.54 392.07,882.29 392.07,472.33 "
                    />
                  </g>
                </g>
              </g>
            </svg>
          </Text>

          <div className="flex items-center space-x-2">
            <div className="text-xl">
              <ConnectButton
                accountStatus={{
                  smallScreen: "avatar",
                  largeScreen: "full",
                }}
                showBalance={true}
                chainStatus={{
                  smallScreen: "icon",
                  largeScreen: "icon",
                }}
              />
            </div>
            <ActionIcon
              variant="outline"
              color={dark ? "yellow" : "blue"}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
            >
              {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
            </ActionIcon>
          </div>
        </div>

        <div className="container">
          <h1 className="px-3 text-4xl sm:text-5xl md:text-6xl cursor-default">Execution-Layer</h1>
          <div className="grid h-screen grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {Clients.map((client, i) => (
              <div
                key={i}
                className="col-span-2 flex h-full flex-col items-center justify-center p-2 sm:col-span-1"
              >
                <div className="relative flex h-full w-full flex-col items-start justify-between overflow-clip rounded border border-zinc-200 bg-zinc-200/20 p-4 backdrop-blur-lg">
                  <div className="relative flex w-screen justify-center">
                    <img
                      src={client.img}
                      alt=""
                      className={
                        client.name == "Geth"
                          ? "object-fit absolute top-0 left-0 z-10 flex h-[50vh] scale-50 opacity-75"
                          : "object-fit absolute top-0 left-4 z-10 opacity-75"
                      }
                    />
                  </div>
                  <div className="z-20 flex">
                    <h2 className="text-2xl md:text-4xl cursor-default">{client.name}</h2>
                  </div>
                  <div className="z-20 grid w-full grid-cols-2 items-center text-base text-purple-500 sm:text-lg md:grid-cols-2 md:text-xl lg:grid-cols-1">
                    <div className="relative flex items-center justify-start text-xs transition-all duration-150 ease-in-out hover:scale-[1.02] md:justify-start md:text-xl md:text-xl">
                      <div className="flex items-center space-x-2">
                        <a href={client.github} className="no-underline sm:text-lg md:text-xl">
                          {"Github"}
                        </a>
                        <CodeBracketIcon className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="relative flex items-center justify-start text-xs transition-all duration-150 ease-in-out hover:scale-[1.02] md:justify-start md:text-xl md:text-xl">
                      <div className="flex items-center space-x-2">
                        <a href={client.docs} className="no-underline sm:text-lg md:text-xl">
                          {"Documentation"}
                        </a>
                        <BookOpenIcon className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="relative flex items-center justify-start text-xs transition-all duration-150 ease-in-out hover:scale-[1.02] md:justify-start md:text-xl md:text-xl">
                      <div className="flex items-center space-x-2">
                        <a href={client.status} className="no-underline sm:text-lg md:text-xl">
                          {"Status"}
                        </a>
                        <BookOpenIcon className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="relative flex items-center justify-start text-xs transition-all duration-150 ease-in-out hover:scale-[1.02] md:justify-start md:text-xl md:text-xl">
                      <div className="flex items-center space-x-2">
                        <a href={client.contact} className="no-underline sm:text-lg md:text-xl">
                          {"Contact"}
                        </a>
                        <ChatBubbleLeftRightIcon className="h-4 w-4" />
                      </div>
                    </div>
                    <Text
                      sx={{ fontFamily: "Greycliff CF, sans-serif" }}
                      color={dark ? "yellow" : "blue"}
                    >
                      <div className="flex w-full items-center text-xs">
                        <div className="flex">
                          <p className="font-medium">{client.installation}</p>
                        </div>
                      </div>
                    </Text>
                  </div>
                  <div className="flex w-full items-center justify-end">
                    <Text
                      sx={{ fontFamily: "Greycliff CF, sans-serif" }}
                      color={dark ? "teal" : "green"}
                    >
                      <div className="flex w-full items-center text-xs">
                        <div className="flex">
                          <a href={client.donate} className="font-medium no-underline">
                            {"Donate"}
                          </a>
                        </div>
                      </div>
                    </Text>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ExecutionBear />
        <div className="grid grid-cols-1 space-y-4 md:grid-cols-2 w-full md:space-x-2 p-3">
          <CreatePost/>
          <PublicationsCard/>
        </div>
      </div>
    </div>
  );
}
