import PetsSection from "./petsSection/petsSection";

const DashBoardPage = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-330 flex-col items-center justify-center px-16 py-25">
        <h1 className="text-5xl">Hello, client</h1>
        <div className="w-full items-start py-25">
          <PetsSection />
        </div>
      </div>
    </div>
  );
};
export default DashBoardPage;
