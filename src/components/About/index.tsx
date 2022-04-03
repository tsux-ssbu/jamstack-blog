import { VFC } from "react";

const DISCRIPTION =
  "岡山大学経済学部(23卒)に所属しており、1年くらいプログラミングを学んでいます。CS50でコンピューターサイエンスの基礎を学びました。フロントエンド開発が好きで、今はTypeScript,Next.jsを学んでいます。";

export const About: VFC = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <h1 className="self-start ml-0 md:ml-16">About me</h1>
      <div className="p-4 mt-4 w-11/12 bg-gray-50 rounded-md md:w-8/12">
        <p>{DISCRIPTION}</p>
      </div>
    </div>
  );
};
