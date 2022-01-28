import Link from "next/link";
import { client } from "../libs/client";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function Blog({ blog }) {
  return (
    <main className="mt-12 h-screen">
      <div className="mx-auto w-11/12 md:w-10/12">
        <ul>
          {blog.map((blog) => (
            <li key={blog.id} className="mt-8">
              <Link href={`/blog/${blog.id}`}>
                <a className="text-2xl font-bold">{blog.title}</a>
              </Link>
              <p>
                {dayjs
                  .utc(blog.publishedAt)
                  .tz("Asia/Tokyo")
                  .format("YYYY-MM-DD")}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

// データをテンプレートに受け渡す部分の処理
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
