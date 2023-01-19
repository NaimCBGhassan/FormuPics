import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p>is loading...</p>
      <AiOutlineLoading3Quarters className="w-20 h-20" />
    </div>
  );
};
