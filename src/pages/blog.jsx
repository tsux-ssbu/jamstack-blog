import Link from "next/link";
import { client } from "../libs/client";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function Blog({ blog, category }) {
  const categoryColor = {
    Self: "bg-green-300",
    Dev: "bg-blue-300",
    Collect: "bg-pink-300",
  };

  return (
    <main className="mt-12 h-screen">
      <div className="mx-auto w-11/12 md:w-10/12">
        <ul>
          {blog.map((blog) => (
            <li key={blog.id} className="mt-8">
              <Link href={`/blog/${blog.id}`}>
                <a className="text-2xl font-bold hover:underline">
                  {blog.title}
                </a>
              </Link>
              <div className="flex items-center">
                <p className="mr-8">
                  {dayjs
                    .utc(blog.publishedAt)
                    .tz("Asia/Tokyo")
                    .format("YYYY-MM-DD")}
                </p>
                <div
                  className={`flex items-center h-6 ${
                    blog.category && categoryColor[blog.category.name]
                  }  rounded-sm`}
                >
                  <p className="px-1 text-sm font-bold leading-8 ">
                    {blog.category && `${blog.category.name}`}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <h2 className="leading-8 border-b-2">カテゴリー</h2>
          <ul className="p-4">
            {category.map((category) => (
              <li key={category.id} className="mt-4  ">
                <Link href={`/category/${category.id}`}>
                  <a className="flex items-center h-6 text-lg font-bold rounded-sm">
                    {category.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

// データをテンプレートに受け渡す部分の処理
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  const categoryData = await client.get({ endpoint: "categories" });

  return {
    props: {
      blog: data.contents,
      category: categoryData.contents,
    },
  };
};
