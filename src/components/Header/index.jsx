import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-between p-8 h-12">
      <h1>TOMOYA</h1>
      <div>
        <Link href="/blog">
          <a>NOTE</a>
        </Link>
      </div>
    </header>
  );
};
