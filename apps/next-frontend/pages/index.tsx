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
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from "react-twitter-embed";
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
    <div className="flex min-h-screen w-full flex-col items-center justify-start md:scrollbar-thin md:scrollbar-thumb-gray-900/80 md:scrollbar-track-gray-100 px-2">
      <div className="flex flex-col w-full m-0">
        <div className="flex items-center justify-between p-2 px-4 text-4xl">
          <EthereumLogo/>
          <h1 className="px-3 text-base sm:text-3xl md:text-6xl font-light uppercase tracking-widest opacity-5 cursor-default">Execution-Layer</h1>

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

        <div className="flex flex-col items-center min-h-screen">
          <div className="grid min-h-screen grid-cols-1 sm:grid-cols-2 relative ">
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
                        <Link href={client.contact} className="card-option-text">
                          {"Contact"}
                        </Link>
                        <ChatBubbleLeftRightIcon className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full items-center justify-center z-20">
                    <div className="flex flex-col w-full space-y-[-8px] sm:space-y-[-4px] md:space-y-[-2px]">
                      <div className="col-span-2">
                        <div className="flex items-center space-x-2">
                          <p className="card-option-text m-0 p-0 font-light text-[12px] sm:text-base lg:text-lg">
                            {"Status:"}
                          </p>
                          <p className="card-option-text capitalize m-0 p-0 font-light w-full break-text text-[12px] sm:text-base lg:text-lg">
                            {client.status}
                          </p>
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className="flex items-center space-x-2">
                          <p className="card-option-text m-0 p-0 font-light text-[12px] sm:text-base lg:text-lg">
                          Supports:
                          </p>
                          <p className="card-option-text m-0 p-0 font-light w-full break-text text-[12px] sm:text-base lg:text-lg">
                            {client.supports}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Text
                      sx={{ fontFamily: "Greycliff CF, sans-serif" }}
                      color={dark ? "teal" : "green"}
                    >
                      <div className="flex items-center text-xs">
                        <div className="flex">
                          <a href={client.donate} className="font-medium pt-2 sm:pt-4 md:pt-8 text-green-500 visited:text-green-500 hover:text-lime-500 transition-all ease-in-out duration-150 tracking-wider text-base sm:text-lg md:text-2xl uppercase no-underline">
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

          <h2 className={`uppercase tracking-[16px] text-base sm:text-[16px] md:text-lg bg-clip-text text-transparent bg-gradient-to-bl ${dark ? " from-slate-900 via-stone-500" : "uppercase tracking-[16px] bg-clip-text text-transparent bg-gradient-to-bl from-stone-50 via-slate-200"}`}>
                Community
          </h2>

          <div className="grid justify-center h-full sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex w-full h-fit justify-center md:p-2">
              <TwitterTweetEmbed
                tweetId={"1600274426905251841"}
              />
            </div>
            <div className="flex w-full h-fit justify-center md:p-2">
            
              <TwitterTweetEmbed
                tweetId={"1599080156651741186"}
              />
            
            </div>
            <div className="flex w-full h-fit justify-center md:p-2">
            
              <TwitterTweetEmbed
                tweetId={"1597532578872848385"}
              />
            
            </div>
            <div className="flex w-full h-fit justify-center md:p-2">
            
              <TwitterTweetEmbed
                tweetId={"1588213672156995586"}
              />
            
            </div>
            <div className="flex w-full h-fit justify-center md:p-2">
              <TwitterTweetEmbed
                tweetId={"1597352375593078784"}
              />
            
            </div>
          </div>
        </div>
        <ExecutionBear />
      </div>
    </div>
  );
}
