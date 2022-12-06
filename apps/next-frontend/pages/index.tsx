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
import {BookOpenIcon, ChatBubbleLeftRightIcon, CodeBracketIcon} from '@heroicons/react/24/solid';

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
      donate: "https://gitcoin.co/grants/142/nethermind",
      img: "https://nethermind.io/wp-content/uploads/2022/04/Logo-icon.svg",
      installation: `brew tap nethermindeth/nethermind

      brew install nethermind`
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
`
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
      `
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
      
      brew install ethereum --devel`
    }
  ]
  return (
    // bg-gradient-to-bl/20 from-blue-500 via-teal-500 to-lime-500
  // <div className={`flex flex-col items-center min-h-screen relative bg-gradient-to-bl from-blue-500 via-teal-500 to-lime-500`}>
  <div className='container'>
    <div className='flex flex-col absolute top-0 left-0 h-full w-full justify-start items-center'>
    <div className="p-2 px-4 outline outline-[1.62px] outline-stone-50/50 flex w-full items-center text-4xl justify-between font-extrabold">  
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
    {/* <LensKitButton /> */}

      <div className='container'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl px-3'>Execution-Layer</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 h-screen bg-brown-500'>
            {Clients.map((client, i)=>(
              <div key={i} className="p-2 col-span-2 sm:col-span-1 h-full justify-center items-center flex flex-col">
                <div className='flex flex-col p-4 w-full items-start h-full overflow-clip justify-between relative bg-zinc-200/20 backdrop-blur-lg border border-zinc-200 rounded'>
                    <div className='relative flex w-screen justify-center'>
                      <img src={client.img}  alt="" className={client.name == 'Geth' ? 'absolute z-10 opacity-75 top-0 left-0 h-[50vh] object-fit scale-50 flex' : 'absolute z-10 object-fit top-0 left-4 opacity-75'}/>
                    </div>
                    <div className='flex z-20'>
                      <h2 className='text-2xl md:text-4xl'>{client.name}</h2>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 z-20 text-purple-500 w-full lg:grid-cols-1 text-base sm:text-lg md:text-xl items-center'>
                      <div className='flex justify-start md:justify-start text-xs md:text-xl md:text-xl relative items-center hover:scale-[1.02] transition-all ease-in-out duration-150'>
                        <div className='flex space-x-2 items-center'>
                          <a href={client.github} className='no-underline sm:text-lg md:text-xl'>{"Github"}</a>
                          <CodeBracketIcon className='h-4 w-4' />
                        </div>
                      </div>
                      <div className='flex justify-start md:justify-start text-xs md:text-xl md:text-xl relative items-center hover:scale-[1.02] transition-all ease-in-out duration-150'>
                        <div className='flex space-x-2 items-center'>
                          <a href={client.docs} className='no-underline sm:text-lg md:text-xl'>{"Documentation"}</a>
                          <BookOpenIcon className='h-4 w-4' />
                        </div>
                      </div>
                      <div className='flex justify-start md:justify-start text-xs md:text-xl md:text-xl relative items-center hover:scale-[1.02] transition-all ease-in-out duration-150'>
                        <div className='flex space-x-2 items-center'>
                          <a href={client.status} className='no-underline sm:text-lg md:text-xl'>{"Status"}</a>
                          <BookOpenIcon className='h-4 w-4' />
                        </div>
                      </div>
                      <div className='flex justify-start md:justify-start text-xs md:text-xl md:text-xl relative items-center hover:scale-[1.02] transition-all ease-in-out duration-150'>
                        <div className='flex space-x-2 items-center'>
                          <a href={client.contact} className='no-underline sm:text-lg md:text-xl'>{"Contact"}</a>
                          <ChatBubbleLeftRightIcon className='h-4 w-4' />
                        </div>
                      </div>
                      <Text
                        sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
                        color={dark ? 'yellow' : 'blue'}
                      >
                      <div className='flex w-full text-xs items-center'>
                        <div className='flex'>
                          <p className='font-medium'>{client.installation}</p>
                        </div>
                      </div>
                      </Text>
                      
                  </div>
                  <div className='flex w-full justify-end items-center'>
                    <Text
                      sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
                      color={dark ? 'teal' : 'green'}
                    >
                    <div className='flex w-full text-xs items-center'>
                      <div className='flex'>
                        <a href={client.donate} className='font-medium no-underline'>{"Donate"}</a>
                      </div>
                    </div>
                    </Text>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <a href='https://optimistic.etherscan.io/address/0x22Cd0e2680f4B9aE140E3b9AbFA3463532e290Ff' className='sm:z-20 scale-50 sm:scale-75 md:scale-100'>
        <svg xmlns="http://www.w3.org/2000/svg" id="execution-layer-bear" width="500" height="500" viewBox="0 0 500 500">
        <g id="execution-layer-bear-2100"><desc>Execution Layer Bear</desc><g stroke="black" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"><path d="M141.746 364.546C88.0896 338.166 67.7686 339.117 54.9706 378.618C58.0112 418.292 64.3272 429.537 80.7686 437.25C104.636 448.709 170.876 432.772 247.283 422.005C354.846 435.377 424.823 445.054 438.422 437.25C458.371 424.569 466.499 414.297 464.22 378.618C445.099 351.034 433.356 339.684 403.243 356.338L365.719 336.403L141.746 364.546Z" fill="#383838"/><path d="M289.498 101.876C331.996 80.7832 329.868 101.341 328.195 149.954L289.498 101.876Z" fill="#696969"/><path d="M166.371 134.71C159.627 93.6161 168.829 83.778 208.586 96.0128L166.371 134.71Z" fill="#696969"/><path d="M328.195 149.954C287.152 66.6969 206.241 66.6969 162.853 142.918C142.529 198.634 141.272 222.583 172.234 241.419C236.394 285.393 269.181 279.975 334.058 241.419C342.266 228.521 349.3 182.978 328.195 149.954Z" fill="#383838"/><path d="M182.788 416.142L172.234 319.986H305.915V425.523C267.207 438.31 226.501 448.015 182.788 416.142Z" fill="#696969"/><path d="M203.895 438.422C188.866 441.956 126.168 466.883 112.43 429.041C113.412 402.012 115.628 378.479 120.983 355.165C128.972 320.386 143.947 286.097 172.234 241.42C237.262 281.898 267.857 272.611 332.885 242.592C361.052 282.666 377.85 317.581 377.663 346.957C377.6 356.842 380.012 367.162 377.663 378.618C377.663 378.618 373.927 400.898 373.927 429.041C373.927 457.185 297.706 465.393 289.498 429.041C281.289 392.69 286.505 410.486 297.706 346.957C263.52 339.96 240.669 340.596 195.687 346.957C202.359 358.413 218.925 434.889 203.895 438.422Z" fill="#383838"/><path d="M244.5 271.287C324.5 271.287 334 160.882 240 160.882C146 160.882 164.5 271.287 244.5 271.287Z" fill="#696969"/><path d="M215.622 195.687C226.175 185.133 255.491 189.824 260.182 198.032C248.455 209.758 227.348 207.413 215.622 195.687Z" fill="black"/><path d="M221.485 228.521C242.828 237.607 245.499 236.723 263.7 228.521" fill="none"/></g><circle cx="194.788" cy="165.645" r="10" fill="black"/><circle cx="286.599" cy="166.99" r="10" fill="black"/><g stroke="DeepPink" stroke-width="2.28109" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M286.732 276L286.367 277.242V313.288L286.732 313.653L303.464 303.763L286.732 276Z"/><path d="M286.732 276L270 303.763L286.732 313.653V296.158V276Z"/><path d="M286.732 313.653L303.464 303.763L286.732 296.158V313.653Z"/><path d="M270 303.763L286.732 313.653V296.158L270 303.763Z"/></g><g stroke="DeepPink" stroke-width="2.28109" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M286.732 330.514V316.821L270 306.936L286.732 330.514Z"/><path d="M286.732 316.821L286.526 317.072V329.913L286.732 330.514L303.474 306.936L286.732 316.821Z"/></g></g>
        </svg>
      </a>
      </div>
  </div>
  )
}
