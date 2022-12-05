import {
  ActionIcon,
  Center,
  Flex,
  SimpleGrid,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { IconBook, IconMoonStars, IconSun } from '@tabler/icons'
import { useState } from 'react'
import CollectPublication from '../components/CollectPublication'
import CreateComment from '../components/CreateComment'
import CreateMirror from '../components/CreateMirror'
import CreatePost from '../components/CreatePost'
import CreateProfile from '../components/CreateProfile'
import EditProfile from '../components/EditProfile'
import Follow from '../components/Follow'
import ProfileCard from '../components/ProfileCard'
import { PublicationCard } from '../components/PublicationCard'
import { PublicationsCard } from '../components/PublicationsCard'
import Unfollow from '../components/Unfollow'
import {BookOpenIcon, ChatBubbleLeftRightIcon} from '@heroicons/react/24/solid';

export default function Home() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'
  const theme = useMantineTheme()
  const Clients = [
    {
      name: "Nethermind",
      github: "https://github.com/NethermindEth/nethermind",
      docs: "https://docs.nethermind.io/nethermind/first-steps-with-nethermind/getting-started",
      contact: "https://discord.com/invite/PaCMRFdvWT",
      status: "stable",
      supports: "Linux, Win, macOS",
      donate: "https://gitcoin.co/grants/142/nethermind"
    },
    {
      name: "Erigon (Turbo-Geth)",
      github: "https://github.com/ledgerwatch/erigon",
      docs: "https://github.com/ledgerwatch/erigon#usage",
      contact: "",
      status: "alpha & beta",
      supports: "Linux, Win, macOS, ARM",
      donate: "https://etherscan.io/address/0x8BFBB529A9E85fDC4b70A4FCdC0D68Bb298B8816"
    },
    {
      name: "Besu",
      github: "https://github.com/hyperledger/besu/",
      docs: "https://besu.hyperledger.org/en/stable/",
      contact: "https://discord.com/invite/hyperledger",
      status: "stable",
      supports: "Linux, Win, macOS",
      donate: "https://protocol-guild.readthedocs.io/en/latest/index.html"
    },
    {
      name: "Geth",
      github: "",
      docs: "",
      contact: "",
      status: "",
      supports: "",
      donate: ""
    }
  ]
  // grid card layout has split lines
  // place in center of page
  return (

  <div className={`flex flex-col items-center w-full`}>
  <div className={`flex w-full justify-start`}>
  <div className="p-2 px-4 outline outline-4 outline-stone-50 flex items-center text-4xl justify-between w-full font-extrabold">  
    <Text
      variant="gradient"
      gradient={{ from: 'lime', to: 'cyan', deg: 45 }}
      sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
      ta="center"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="44px" height="44px" version="1.1" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="-200 0 1500 1300">
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"/>
        <g id="_1421394342400">
        <g>
          <polygon fill="#343434" fillRule="nonzero" points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 "/>
          <polygon fill="#8C8C8C" fillRule="nonzero" points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 "/>
          <polygon fill="#3C3C3B" fillRule="nonzero" points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 "/>
          <polygon fill="#8C8C8C" fillRule="nonzero" points="392.07,1277.38 392.07,956.52 -0,724.89 "/>
          <polygon fill="#141414" fillRule="nonzero" points="392.07,882.29 784.13,650.54 392.07,472.33 "/>
          <polygon fill="#393939" fillRule="nonzero" points="0,650.54 392.07,882.29 392.07,472.33 "/>
        </g>
        </g>
      </g>
      </svg>
    </Text>
    
    <div className='flex items-center space-x-2'>
      <div className='text-xl'>
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
        color={dark ? 'yellow' : 'blue'}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
      >
        {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
      </ActionIcon>
    </div>
  </div>
  </div>

  
  {/* <LensKitButton /> */}

  <Center style={{ width: "100%"}}>
    <div className='flex flex-col w-full h-[80vh] p-2'>
      <h1 className='text-4xl sm:text-5xl md:text-6xl px-3'>Execution-Layer</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
          {Clients.map((client, i)=>(
            <div key={i} className="p-2 col-span-2 sm:col-span-1">
              <div className='flex w-full items-start h-[40vh] justify-start relative bg-zinc-50 border border-stone-200 rounded'>
                <div className='absolute p-2 flex flex-col w-full'>
                  <div className='flex'>
                    <h2 className='text-4xl sm:text-2xl md:text-lg'>{client.name}</h2>
                  </div>
                  <div className='flex flex-col space-y-4 items-end'>
                    <div className='flex justify-center text-purple-500 relative items-center hover:scale-[1.02] transition-all ease-in-out duration-150'>
                      <div className='flex space-x-2 items-center'>
                        <a href={client.github} className='no-underline text-purple-500'>{"Github"}</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill='#a854f7' viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </div>
                    </div>
                    <div className='flex justify-center text-purple-500 relative items-center hover:scale-[1.02] transition-all ease-in-out duration-150'>
                      <div className='flex space-x-2 items-center'>
                        <a href={client.docs} className='no-underline text-purple-500'>{"Documentation"}</a>
                        <BookOpenIcon className='h-4 w-4' />
                      </div>
                    </div>
                    <div className='flex justify-center text-purple-500 relative items-center hover:scale-[1.02] transition-all ease-in-out duration-150'>
                      <div className='flex space-x-2 items-center'>
                        <a href={client.status} className='no-underline text-purple-500'>{"Status"}</a>
                        <BookOpenIcon className='h-4 w-4' />
                      </div>
                    </div>
                    <div className='flex justify-center text-purple-500 relative items-center hover:scale-[1.02] transition-all ease-in-out duration-150'>
                      <div className='flex space-x-2 items-center'>
                        <a href={client.contact} className='no-underline text-purple-500'>{"Contact"}</a>
                        <ChatBubbleLeftRightIcon className='h-4 w-4' />
                      </div>
                    </div>
                </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
    {/* <CreateProfile /> */}

    {/* --------------------------------------------- */}
    {/* <EditProfile />
    <ProfileCard /> */}
    {/* <CreatePost />
    <PublicationCard />
    <PublicationsCard />
    <CollectPublication />
    <CreateMirror />
    <Follow />
    <Unfollow />
    <CreateComment /> */}
  </Center>
  </div>
  )
}
