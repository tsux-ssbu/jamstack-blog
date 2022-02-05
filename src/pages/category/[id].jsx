import Link from "next/link";
import { client } from "../../libs/client";

export default function CategoryId({ blog }) {
  // カテゴリーに紐付いたコンテンツがない場合に表示
  if (blog.length === 0) {
    return (
      <div className="mx-auto mt-12 w-11/12 h-screen md:w-10/12">
        ブログコンテンツがありません
      </div>
    );
  }
  return (
    <div className="mx-auto mt-12 w-11/12 h-screen md:w-10/12">
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 静的生成のためのパスを指定
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "categories" });

  const paths = data.contents.map((content) => `/category/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({
    endpoint: "blog",
    queries: { filters: `category[equals]${id}` },
  });

  return {
    props: {
      blog: data.contents,
    },
  };
};
