import Image from 'next/image'
import Link from 'next/link'
import { VFC } from 'react'

import { SiZenn, SiGithub, SiTwitter } from 'react-icons/si'

const ICONS = [
  {
    icon: <SiGithub size={25} color={'#292929'} />,
    url: 'https://github.com/tsux-ssbu',
    title: 'Github',
  },
  {
    icon: <SiZenn size={25} color={'#449eda'} />,
    url: 'https://zenn.dev/tsuxxx',
    title: 'Zenn',
  },
  {
    icon: <SiTwitter size={25} color={'#449eda'} />,
    url: 'https://twitter.com/tsux_ssbu',
    title: 'Twitter',
  },
]

export const Profile: VFC = () => {
  return (
    <div className='flex flex-col justify-center items-center '>
      <div className='m-4'>
        <Image
          src='/images/avatar.JPG'
          alt='Picture of the author'
          width={200}
          height={200}
          className='rounded-full'
        />
      </div>
      <h2>Tomoya Tsukamura</h2>
      <div className='flex flex-row mt-4 space-x-4'>
        {ICONS.map((item) => {
          return (
            <div key={item.url} className='hover:cursor-pointer'>
              <Link href={item.url}>
                <a title={item.title} target='_blank'>
                  {item.icon}
                </a>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
