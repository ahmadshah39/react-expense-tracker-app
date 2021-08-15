import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
const IncomeExpense: React.FC = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts: number[] = transactions!.map(
    (transaction) => transaction.amount
  );
  const income: number = amounts
    .filter((amount) => amount > 0)
    .reduce((ack, amount) => (ack += amount), 0);
  const expense: number =
    amounts
      .filter((amount) => amount < 0)
      .reduce((ack, amount) => (ack += amount), 0) * -1;

  return (
    <div className="flex justify-between items-center my-5 p-5 shadow-lg bg-white ">
      <div className="flex-1 text-center border-r border-gray-500 p-2">
        <h4 className="uppercase font-bold text-gray-600">income</h4>
        <p className="text-md md:text-xl break-all tracking-wide font-bold my-1 text-green-500">
          ${income}
        </p>
      </div>
      <div className="flex-1 text-center p-2">
        <h4 className="uppercase font-bold text-gray-600">Expense</h4>
        <p className="text-md md:text-xl break-all font-bold tracking-wide my-1 text-red-500">
          ${expense}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpense;
