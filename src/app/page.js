import Level from "./components/Level";
import Plans from "./components/Plans";
import Test from "./components/Test";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex flex-col">
        <div className="flex w-[80%] mx-auto">
          <button className="flex text-orange gap-x-2">
            <p className="text-[30px]">{"<"}</p>
            <p className="text-[26px]">Student Plan</p>
          </button>
        </div>

        <div className="flex md:flex-row flex-col justify-center gap-x-12 md:h-[298px]">
          <div className="md:w-[57%] md:mx-0 w-[95%] mx-auto">
            <Test />
          </div>
          <div className="md:w-[20%] md:mx-0 w-[95%] mx-auto">
            <Level />
          </div>
        </div>
        <div className="flex w-[80%] mx-auto">
          <p className="text-orange text-[18px] pt-2">Active Plans</p>
        </div>
        <div className="md:w-[80%] w-[95%] mx-auto">
          <Plans />
        </div>
      </div>
    </div>
  );
}
