import { createContext, useReducer } from "react";
import GlobalReducer, { State } from "./GlobalReducer";
import {
  ADD_TRANSACTION,
  GET_TRANSACTION,
  DELETE_TRANSACTION,
} from "./ActionTypes";
// TYPES
export interface Transaction {
  id: string;
  text: string;
  amount: number;
}

export interface IGlobalContextPorps {
  transactions: Transaction[] | null;
  getTransactions: () => void;
  addTransaction: (transaction: Transaction) => void;
  deleteTransaciton: (id?: string) => void;
}

// intial States
const initialState: State = {
  transactions: [],
};
// Creating Context
export const GlobalContext = createContext<IGlobalContextPorps>({
  transactions: initialState.transactions,
  getTransactions: () => {},
  addTransaction: () => {},
  deleteTransaciton: () => {},
});

// Provider Component
export const GlobalProvider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  // Actions

  // GET Transactions
  const getTransactions = () => {
    const transacitons = JSON.parse(
      localStorage.getItem("transactions") || "[]"
    );
    dispatch({
      type: GET_TRANSACTION,
      payload: transacitons,
    });
  };
  // Add transaction
  const addTransaction = (transaction: Transaction) => {
    state.transactions !== null
      ? localStorage.setItem(
          "transactions",
          JSON.stringify([transaction, ...state.transactions])
        )
      : localStorage.setItem("transactions", JSON.stringify([transaction]));
    dispatch({
      type: ADD_TRANSACTION,
      payload: transaction,
    });
  };
  // Delete Transaciton
  const deleteTransaciton = async (id?: string) => {
    const transactions: Transaction[] = state.transactions.filter(
      (transaction) => transaction.id !== id
    );
    localStorage.setItem("transactions", JSON.stringify(transactions));
    dispatch({ type: DELETE_TRANSACTION, payload: id });
  };
  // return Provider
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        getTransactions,
        addTransaction,
        deleteTransaciton,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
