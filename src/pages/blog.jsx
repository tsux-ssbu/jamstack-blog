import Link from "next/link";
import { client } from "../libs/client";

export default function Blog({ blog }) {
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
              {/* <div className="flex items-center">
                <p className="mr-8">時間が入る</p>
              </div> */}
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
