import Link from 'next/link'
import { VFC } from 'react'

export const Header: VFC = () => {
  return (
    <header className='flex justify-between py-8 h-12 leading-10 md:py-12'>
      <Link href='/'>
        <a className='text-2xl font-bold'>tsux.dev</a>
      </Link>
      <div>
        <Link href='/blog'>
          <a className='hover:text-blue-500 hover:underline'>BLOG</a>
        </Link>
      </div>
    </header>
  )
}
