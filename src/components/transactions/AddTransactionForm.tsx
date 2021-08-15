import { useState, useContext } from "react";
import { GlobalContext, Transaction } from "../../context/GlobalState";
import { v4 as uuidv4 } from "uuid";
const AddTransactionForm: React.FC = () => {
  const globalContext = useContext(GlobalContext);
  const { addTransaction } = globalContext;

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setAmount(parseInt(e.target.value));
  };
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (text !== "" && amount !== 0) {
      const transaction: Transaction = {
        id: uuidv4(),
        text,
        amount,
      };
      addTransaction(transaction);
    }
    setText("");
    setAmount(0);
  };
  return (
    <>
      <h3 className="text-gray-900 p-2 mb-10 text-xl font-bold border-b border-gray-300">
        Add new transaction
      </h3>
      <form onSubmit={onSubmit}>
        <div className="py-2">
          <label
            htmlFor="text"
            className="inline-block text-lg font-bold text-gray-700"
          >
            Text
          </label>
          <input
            className="block cursor-pointer shadow-lg text-lg p-4 border-0 my-2 w-full"
            type="text"
            value={text}
            name="text"
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="py-2">
          <label
            className="inline-block text-lg font-bold text-gray-700"
            htmlFor="amount"
          >
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            className="block cursor-pointer shadow-lg text-lg p-4 border-0 my-2 w-full"
            type="number"
            value={amount !== 0 ? amount : ""}
            name="amount"
            onChange={onChange}
            placeholder="Enter amount..."
          />
        </div>
        <button className="w-full uppercase py-2  bg-indigo-400 hover:bg-indigo-300 focus:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2  text-white text-2xl">
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransactionForm;
