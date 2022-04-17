import { ReactNode, VFC } from 'react'

import { Footer } from '../Footer'
import { Header } from '../Header'

type Props = {
  children: ReactNode
}

export const Layout: VFC<Props> = (props) => {
  return (
    <div className='bg-gray-100'>
      <div className='mx-auto w-11/12 md:w-3/6'>
        <Header />
        <div>{props.children}</div>
        <Footer />
      </div>
    </div>
  )
}
