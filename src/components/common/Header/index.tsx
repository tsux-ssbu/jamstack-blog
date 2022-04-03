import Link from "next/link";
import { VFC } from "react";

export const Header: VFC = () => {
  return (
    <header className="flex justify-between p-4 h-12 leading-10 md:p-12">
      <h1>
        <Link href="/">
          <a>tsux.dev</a>
        </Link>
      </h1>
      <div>
        <Link href="/blog">
          <a className="hover:text-blue-500 hover:underline">BLOG</a>
        </Link>
      </div>
    </header>
  );
};
