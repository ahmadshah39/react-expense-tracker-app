import { useEffect, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Transaction from "./Transaction";
const TransactionList: React.FC = () => {
  const globalContext = useContext(GlobalContext);
  const { getTransactions, transactions } = globalContext;
  useEffect(() => {
    getTransactions();

    // eslint-disable-next-line
  }, []);
  return (
    <>
      <h3 className="border-b border-gray-300 text-gray-900 p-2 mb-10 mt-2 text-xl font-bold">
        Transaction History
      </h3>
      <ul className="md:px-8  py-3 mb-10 space-y-2">
        {transactions &&
          transactions.map((transaction, index) => (
            <Transaction key={index} transaction={transaction} />
          ))}
      </ul>
    </>
  );
};

export default TransactionList;
