import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-between p-4 h-12 leading-10 md:p-12">
      <h1>
        <Link href="/">
          <a>Tsux</a>
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
