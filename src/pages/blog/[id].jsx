import { client } from "../../libs/client";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function BlogId({ blog }) {
  return (
    <main className="mx-auto mt-12 w-11/12 md:w-10/12">
      <h1>{blog.title}</h1>
      <p>{dayjs.utc(blog.publishedAt).tz("Asia/Tokyo").format("YYYY-MM-DD")}</p>
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
