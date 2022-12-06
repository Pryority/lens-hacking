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
import { BookOpenIcon, ChatBubbleLeftRightIcon, ClipboardDocumentIcon, CodeBracketIcon } from "@heroicons/react/24/solid";
import { ExecutionBear } from "../components/ExecutionBear";
import { EthereumLogo } from "../components/EthereumLogo";
import { Clients } from "../config/config";
import Link from "next/link";

export default function Home() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start scrollbar-thin scrollbar-thumb-gray-900/80 scrollbar-track-gray-100 px-2">
      <div className="flex flex-col w-full m-0">
        <div className="flex items-center justify-between p-2 px-4 text-4xl">
          <EthereumLogo/>
          <h1 className="px-3 text-xl sm:text-5xl md:text-6xl font-light uppercase tracking-widest opacity-5 cursor-default">Execution-Layer</h1>

          <div className="flex items-center space-x-2">
            <div className="text-xl hidden">
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

        <div className="flex flex-col">
          <div className="grid h-screen grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            {Clients.map((client, i) => (
              <div
                key={i}
                className="col-span-2 p-2 flex h-full flex-col items-center justify-center sm:col-span-1"
              >
                <div className="relative flex h-full w-full flex-col items-start justify-between overflow-clip rounded border border-zinc-200 bg-zinc-200/10 p-4 backdrop-blur-lg">
                  <div className="relative flex justify-center w-full items-center">
                    <img
                      src={client.img}
                      alt=""
                      className={
                        client.name == "Geth"
                          ? "object-fit absolute top-0 left-0 z-[-10] flex h-[50vh] scale-50 opacity-[10%]"
                          : "object-contain absolute top-0 left-4 z-[-10] opacity-[10%]"
                      }
                    />
                  </div>
                  <div className="z-20 flex">
                    <Link href={client.twitter} className="client-name">
                      {client.name}
                    </Link>
                  </div>
                  <div className="z-20 grid w-full max-w-[80%] lg:max-w-[100%] grid-cols-2 items-center text-base  visited:text-red-500 sm:text-lg md:grid-cols-2 md:text-xl lg:grid-cols-2">
                    <div className="card-option">
                      <div className="flex items-center space-x-2">
                        <a href={client.github} className="card-option-text">
                          {"Github"}
                        </a>
                        <CodeBracketIcon className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="card-option">
                      <div className="flex items-center space-x-2">
                        <Link href={client.docs} className="card-option-text">
                          {"Documentation"}
                        </Link>
                        <BookOpenIcon className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="card-option">
                      <div className="flex items-center space-x-2">
                        <Link href={client.status} className="card-option-text">
                          {"Status"}
                        </Link>
                        <ClipboardDocumentIcon className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="card-option">
                      <div className="flex items-center space-x-2">
                        <Link href={client.contact} className="card-option-text">
                          {"Contact"}
                        </Link>
                        <ChatBubbleLeftRightIcon className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="flex items-center space-x-2">
                        <p className="card-option-text font-light">
                          Supports:
                        </p>
                        <p className="card-option-text text-[12px] md:text-lg font-light w-full break-text">
                          {client.supports}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="py-4 flex w-full">
                    <div className="outline p-2 rounded-sm flex w-full">
                      <Text
                        sx={{ fontFamily: "Greycliff CF, sans-serif" }}
                        color={dark ? "yellow" : "blue"}
                      >
                        <p className="font-medium text-base leading-[18px] m-0 flex break-all h-fit">{client.installation}</p>
                      </Text>
                    </div>
                  </div> */}
                  <div className="flex w-full items-center justify-center z-20">
                    <Text
                      sx={{ fontFamily: "Greycliff CF, sans-serif" }}
                      color={dark ? "teal" : "green"}
                    >
                      <div className="flex items-center text-xs">
                        <div className="flex">
                          <a href={client.donate} className="font-medium pt-2 sm:pt-4 md:pt-8 hover:text-lime-500 transition-all ease-in-out duration-150 tracking-wider text-base sm:text-lg md:text-2xl uppercase no-underline">
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
          <ExecutionBear />
        </div>
        {/* <div className="grid grid-cols-1 space-y-4 md:grid-cols-2 w-full md:space-x-2 p-3">
          <CreatePost/>
          <PublicationsCard/>
        </div> */}
      </div>
    </div>
  );
}
