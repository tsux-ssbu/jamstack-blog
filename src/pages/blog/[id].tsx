import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { client } from "../../libs/client";
import { BlogType } from "../../type/blog";

type Props = {
  blog: BlogType;
};

const BlogId: NextPage<Props> = ({ blog }) => {
  return (
    <main className="mx-auto mt-12 w-11/12 md:w-10/12">
      <h1>{blog.title}</h1>
      {/* <p>時間が入る</p> */}
      <article
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
        className="mt-12 prose prose-blue"
      />
    </main>
  );
};

// 静的生成のためのパスを指定
export const getStaticPaths: GetStaticPaths<
  Pick<BlogType, "id">
> = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content: any) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述
export const getStaticProps: GetStaticProps<
  Props,
  Pick<BlogType, "id">
> = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const id = params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });
  return {
    props: {
      blog: data,
    },
  };
};

export default BlogId;
