import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk'
import dayjs from 'dayjs'

import { client } from '@/libs/client'
import { Blog } from '../blog'

type Props = Blog & MicroCMSContentId & MicroCMSDate

const BlogId: NextPage<Props> = (props) => {
  return (
    <main className='mx-auto mt-12 w-11/12 md:w-10/12'>
      <h1 className='text-2xl font-bold'>{props.title}</h1>
      <time dateTime={props.publishedAt}>{dayjs(props.publishedAt).format('YYYY/MM/DD')}</time>
      <article
        dangerouslySetInnerHTML={{
          __html: `${props.body}`,
        }}
        className='mt-8 prose prose-blue'
      />
    </main>
  )
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList({ endpoint: 'blog' })
  const ids = data.contents.map((content) => `/blog/${content.id}`)
  return {
    paths: ids,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (ctx) => {
  if (!ctx.params) {
    return {
      notFound: true,
    }
  }
  const data = await client.getListDetail<Blog>({
    endpoint: 'blog',
    contentId: ctx.params.id,
  })
  return {
    props: data,
  }
}

export default BlogId
