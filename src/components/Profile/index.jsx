import Image from "next/image";

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
      <h2 className="font-mono">Tomoya Tsukamura</h2>
      <p>Github Zenn Twiiter note</p>
    </div>
  );
};
