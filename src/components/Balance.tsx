import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
const Balance: React.FC = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts: number[] = transactions!.map(
    (transaction) => transaction.amount
  );
  const total: number = amounts.reduce((ack, amount) => (ack += amount), 0);
  const sign = total < 0 ?? "-";
  return (
    <div className="p-4 space-y-1">
      <h4 className="text-2xl font-bold text-gray-700">YOUR BALANCE</h4>
      {transactions !== null ? (
        <h1 className="text-2xl md:text-6xl  font-bold text-gray-900">
          {sign && "-"}${Math.abs(total).toFixed(2)}
        </h1>
      ) : (
        <h1 className="text-6xl font-bold text-gray-900">LOADING...</h1>
      )}
    </div>
  );
};

export default Balance;
