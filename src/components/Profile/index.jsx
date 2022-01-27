import Image from "next/image";
import Link from "next/link";

import { SiZenn, SiGithub, SiTwitter } from "react-icons/si";

const ICONS = [
  {
    icon: <SiGithub size={25} color={"#292929"} />,
    url: "https://github.com/tsux-ssbu",
  },
  {
    icon: <SiZenn size={25} color={"#449eda"} />,
    url: "https://zenn.dev/tsuxxx",
  },
  {
    icon: <SiTwitter size={25} color={"#449eda"} />,
    url: "https://twitter.com/tsux_ssbu",
  },
];

export const Profile = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="m-4">
        <Image
          src="/images/avatar.JPG"
          alt="Picture of the author"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
      <h2>Tomoya Tsukamura</h2>
      <div className="flex flex-row mt-4 space-x-4">
        {ICONS.map((item) => {
          return (
            <div key={item.icon} className="hover:cursor-pointer">
              <Link href={item.url}>
                <a target="_blank">{item.icon}</a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
