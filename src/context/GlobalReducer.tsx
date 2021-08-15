import { Transaction } from "./GlobalState";
import {
  ADD_TRANSACTION,
  GET_TRANSACTION,
  DELETE_TRANSACTION,
  FILTER_TRANSACTIONS,
} from "./ActionTypes";
export type State = {
  transactions: Transaction[];
};
type action =
  | {
      type: typeof GET_TRANSACTION;
      payload: Transaction[];
    }
  | {
      type: typeof ADD_TRANSACTION;
      payload: Transaction;
    }
  | {
      type: typeof DELETE_TRANSACTION;
      payload?: string;
    }
  | {
      type: typeof FILTER_TRANSACTIONS;
      payload: string;
    };
const GlobalReducer = (state: State, action: action) => {
  switch (action.type) {
    case GET_TRANSACTION:
      return {
        ...state,
        transactions: action.payload,
      };
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    default:
      throw new Error("Bad action");
  }
};
export default GlobalReducer;
