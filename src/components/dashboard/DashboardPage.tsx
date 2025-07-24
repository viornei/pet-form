const DashBoardPage = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col items-center justify-center w-330 py-25">
        <h1 className="text-5xl">Hello, client</h1>
        <div className="flex w-full flex-col justify-items-start px-16 py-25 gap-4">
          <h2 className="text-3xl">Pet information</h2>
          <span>name</span>
          <span>age</span>
          <span>type</span>
        </div>
      </div>
    </div>
  );
};
export default DashBoardPage;
