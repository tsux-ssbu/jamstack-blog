import { VFC } from 'react'

export const Footer: VFC = () => {
  return (
    <div className='flex justify-center items-center p-8 mt-16 border-t-2 border-gray-400'>
      <footer>
        <p className='font-mono '>© 2022 tsux</p>
      </footer>
    </div>
  )
}
