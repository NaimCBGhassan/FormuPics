import { VscEmptyWindow } from "react-icons/vsc";

export const EmptyWindow = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p>There is no posts </p>
      <VscEmptyWindow className="w-20 h-20" />
    </div>
  );
};
