import Image from "next/image";

export const Profile = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-green-100">
      <div className="m-4">
        <Image
          src="/images/avatar.JPG"
          alt="Picture of the author"
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>

      <h2>Tomoya Tsukamura</h2>
      <p>Github Zenn Twiiter note</p>
    </div>
  );
};
