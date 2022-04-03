import { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = (props) => {
  return (
    <div className=" bg-gray-100">
      <div className="mx-auto w-11/12 md:w-3/6">{props.children}</div>
    </div>
  );
};
