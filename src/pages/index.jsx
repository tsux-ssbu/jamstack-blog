import { Header } from "../components/Header";
import { Profile } from "../components/Profile";

export default function Home() {
  return (
    <>
      <Header />
      <Profile />
      <div>
        <h2>About me</h2>
        <p>
          岡山大学経済学部生(23卒)。
          1年くらいプログラミングを学んでいます。最近はReact, Next.js,
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
