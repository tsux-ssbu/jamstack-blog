import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex justify-between">
        <h1>TOMOYA</h1>
        <div>
          <Link href="/blog">
            <a>Articles</a>
          </Link>
        </div>
      </header>
      <div>
        <Image
          src="/images/avatar.JPG"
          alt="Picture of the author"
          width={100}
          height={100}
          className="rounded-full"
        />
        <h2>Tomoya Tsukamura</h2>
        <p>Github Zenn Twiiter</p>
      </div>
      <div>
        <h2>about</h2>
        <p>
          岡山大学経済学部生(23卒)です。 最近はReact, Next.js,
          TypeScriptあたりを学んでいます。
        </p>
      </div>
      <div>
        <h2>Works</h2>
        <div>
          <h3>20.Timer</h3>
          <p>20時間の法則どうこう</p>
        </div>
        <div>
          <h3>5minutes</h3>
          <p>5分頑張ろう的な</p>
        </div>
        <div>
          <h3>人口推移</h3>
          <p>企業の選考課題で作成</p>
        </div>
      </div>
      <footer>© 2022 tomoya</footer>
    </>
  );
}
