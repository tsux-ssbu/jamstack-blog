export const Layout = (props) => {
  return (
    <div className="h-screen bg-gray-100">
      <div className="mx-auto w-11/12 h-screen md:w-3/6">{props.children}</div>
    </div>
  );
};