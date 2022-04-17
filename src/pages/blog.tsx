import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'

import { BlogType } from '@/type/blog'
import { client } from '@/libs/client'

type Props = {
  allBlogsData: BlogType[]
}

const Blog: NextPage<Props> = ({ allBlogsData }) => {
  return (
    <main className='mt-12 h-screen'>
      <div className='mx-auto w-11/12 md:w-10/12'>
        <ul>
          {allBlogsData.map((blog: BlogType) => (
            <li key={blog.id} className='mt-8'>
              <Link href={`/blog/${blog.id}`}>
                <a className='text-2xl font-bold hover:underline'>{blog.title}</a>
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
  const allBlogsData = await client.get({ endpoint: 'blog' })
  return {
    props: {
      allBlogsData: allBlogsData.contents,
    },
  }
}

export default Blog
