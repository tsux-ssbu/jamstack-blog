export const Layout = (props) => {
  return (
    <div className=" bg-gray-100">
      <div className="mx-auto w-11/12 md:w-3/6">{props.children}</div>
    </div>
  );
};
