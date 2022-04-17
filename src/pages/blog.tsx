import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'

import { MicroCMSListResponse } from 'microcms-js-sdk'

import { BlogType } from '@/type/blog'
import { client } from '@/libs/client'

type Blog = {
  title: string
  body: string
}

type Props = MicroCMSListResponse<Blog>

const Blog: NextPage<Props> = (props) => {
  return (
    <main className='mt-12 h-screen'>
      <div className='mx-auto w-11/12 md:w-10/12'>
        <ul>
          {props.contents.map((content: BlogType) => (
            <li key={content.id} className='mt-8'>
              <Link href={`/blog/${content.id}`}>
                <a className='text-2xl font-bold hover:underline'>{content.title}</a>
              </Link>
              {/* <div className="flex items-center">
                <p className="mr-8">時間が入る</p>
              </div> */}
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList({ endpoint: 'blog' })
  return {
    props: data,
  }
}

export default Blog
