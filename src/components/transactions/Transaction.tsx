import { useContext, useEffect, useState } from "react";
import {
  Transaction as TransactionProps,
  GlobalContext,
} from "../../context/GlobalState";

const Transaction: React.FC<{ transaction: TransactionProps }> = ({
  transaction: { id, text, amount },
}) => {
  const [mounting, setmounting] = useState<boolean>(true);
  useEffect(() => {
    setmounting(true);

    console.log("mount");
    return () => {
      // setmounting(false);
      console.log("unmount");
    };
  }, []);
  const globalContext = useContext(GlobalContext);
  const { deleteTransaciton } = globalContext;
  const onDelete: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setmounting(false);
    setTimeout(() => {
      deleteTransaciton(id);
    }, 0.05);
  };
  const sign: string = amount < 0 ? "-" : "+";
  return (
    <li
      className={`bg-white  group relative shadow-lg text-gray-700 flex justify-between break-words items-center p-2 mx-2 text-lg font-bold border-r-4 ${
        amount < 0 ? "border-red-600" : "border-green-600"
      } ${mounting === true ? "item-enter-active" : "item-exit-active"}`}
    >
      {text}{" "}
      <span className="break-all ml-3">
        {" "}
        {sign}${Math.abs(amount).toFixed(2)}
      </span>
      <button
        onClick={onDelete}
        className="bg-red-400  py-2 px-3 md:transform md:-translate-y-1/2 md:-translate-x-full text-white md:absolute md:left-0 md:top-2/4 md:opacity-0  md:group-hover:transition-opacity md:group-hover:opacity-100"
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
