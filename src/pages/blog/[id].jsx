import { client } from "../../libs/client";

export default function BlogId({ blog }) {
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
}

// 静的生成のためのパスを指定
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
