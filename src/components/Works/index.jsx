import Link from "next/link";

const PRODUCT_ITEMS = [
  {
    title: "portfolio",
    discription:
      "このサイトです。Jamstackな自分のサイトがほしいと思ってつくりました。振り返りだったり、技術的でない記事を気軽に投稿できるところがほしかったです。",
    url: "https://population-transition-chart-tsux.vercel.app/",
    zenn: undefined,
    github: "https://github.com/tsux-ssbu/microcms-next-jamstack-blog",
    lang: ["Next.js", "microCMS", "tailwindcss"],
  },
  {
    title: "20.Timer",
    discription:
      "たいていのことは20時間学習したら習得できるという20時間の法則を実践することを支援するシンプルなカウントダウンタイマー+メモアプリです。",
    url: "https://twenty-hours-timer.com/",
    zenn: "https://zenn.dev/tsuxxx/articles/03bdd626266d13",
    github: "https://github.com/tsux-ssbu/supatimer",
    lang: ["Next.js", "Supabase", "Chakra UI"],
  },
  {
    title: "5minutes todo app",
    discription:
      "5分で終わるような簡単なタスクだけを登録し、スタートしたら完了するか５分たつと勝手にタスクが消えるTodoモバイルアプリです。怠惰な自分のためにつくりました。",
    url: "https://apps.apple.com/jp/app/5minutes-todo/id1598084813",
    zenn: "https://zenn.dev/tsuxxx/articles/3b2bd7ca9ba631",
    github: "https://github.com/tsux-ssbu/5minutes",
    lang: ["React Native", "Firebase"],
  },
  {
    title: "都道府県別の総人口推移グラフ",
    discription:
      "都道府県別人口推移を表示します。とある企業の選考課題でつくった。外部APIやチャートライブラリを使うのは初めてだったので勉強になったです。(選考は無事落ちちゃいました)",
    url: "https://population-transition-chart-tsux.vercel.app/",
    zenn: undefined,
    github: "https://github.com/tsux-ssbu/yumemi-task",
    lang: ["Next.js", "highcharts"],
  },
];

export const Works = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <h1 className="self-start font-mono md:ml-16">Works</h1>
      <div className="w-11/12 md:w-8/12">
        {PRODUCT_ITEMS.map((product) => {
          return (
            <div key={product.title} className="mt-4 ">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="">{product.discription}</p>
              <span>
                使用技術：
                {product.lang.map((item) => {
                  return item + "  ";
                })}
              </span>

              <div>
                <Link href={product.url}>
                  <a
                    target="_blank"
                    className="mr-4 text-blue-500 hover:underline"
                  >
                    サービスURL↗
                  </a>
                </Link>
                {product.zenn ? (
                  <Link href={product.zenn}>
                    <a
                      target="_blank"
                      className="mr-4 text-blue-500 hover:underline"
                    >
                      Zenn↗
                    </a>
                  </Link>
                ) : undefined}
                {product.github ? (
                  <Link href={product.github}>
                    <a
                      target="_blank"
                      className="text-blue-500 hover:underline"
                    >
                      github↗
                    </a>
                  </Link>
                ) : undefined}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
