import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'

import { MicroCMSListResponse } from 'microcms-js-sdk'
import dayjs from 'dayjs'

import { BlogType } from '@/type/blog'
import { client } from '@/libs/client'

export type Blog = {
  title: string
  body: string
}

type Props = MicroCMSListResponse<Blog>

const Blog: NextPage<Props> = (props) => {
  return (
    <main className='mt-12 h-screen'>
      <div className='mx-auto w-11/12 md:w-10/12'>
        <ul className='space-y-8'>
          {props.contents?.map((content: BlogType) => (
            <li key={content.id}>
              <Link href={`/blog/${content.id}`}>
                <a className='text-2xl font-bold hover:text-gray-400'>{content.title}</a>
              </Link>
              <div>
                <time dateTime={content.publishedAt}>
                  {dayjs(content.publishedAt).format('YYYY/MM/DD')}
                </time>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({ endpoint: 'blog' })
  return {
    props: data,
  }
}

export default Blog
